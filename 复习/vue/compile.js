// 用法 new Compile(el,vm)
class Compile{
    constructor(el, vm){
        //要遍历的数组节点
        this.$el = document.querySelector(el);
        this.$vm = vm;
        //编译
        if(this.$el){
            //转换内部内容为片段Fragment
            this.$fragment = this.node2Fragment(this.$el);
            //执行编译
            this.compile(this.$fragment);
            //将编译完的html结果追加到$el
            this.$el.appendChild(this.$fragment)
        }
    }
    //将宿主元素中代码片段拿出来遍历，这样做比较高效
    node2Fragment(el){
        const frag = document.createDocumentFragment();
        //将el中所有子元素搬家至frag中
        let child;
        while( child = el.firstChild) {
            frag.appendChild(child);
        }
        return frag;
    }
    compile(el){
        const childNodes = el.childNodes;
        Array.from(childNodes).forEach(node => {
            if(this.isElement(node)){
                // console.log('编译元素'+node.nodeName);
                //查找f-
                const nodeAttrs = node.attributes;
                Array.from(nodeAttrs).forEach(attr => {
                    const attrName = attr.name;//属性名
                    const exp = attr.value;//属性值
                    if(this.isDirective(attrName)){
                        // f-text f-model
                        const dir = attrName.substring(2);
                        this[dir] && this[dir](node, this.$vm, exp);
                    }
                    if(this.isEvent(attrName)){
                        const dir = attrName.substring(1) // @click
                        this.eventHandler(node, this.$vm, exp, dir)
                    }
                })
            }else if(this.isInterpolation(node)){
                // console.log('编译文本'+node.textContent);
                this.compileText(node);          
            }
            //递归子节点
            if(node.childNodes && node.childNodes.length>0){
                this.compile(node);
            }
        })
    }
    compileText(node){
        console.log(RegExp.$1);
        // node.textContent = this.$vm.$data[RegExp.$1];//只能初始化一次
        this.update(node, this.$vm, RegExp.$1, 'text');
    }
    //更新函数
    update(node, vm, exp, dir){
        const updaterFn = this[dir+'Updater'];
        updaterFn && updaterFn(node, vm[exp]);
        //依赖收集
        new Watcher(vm, exp, function(value){
            updaterFn && updaterFn(node, value);
        })
    }
    text(node, vm, exp){
        this.update(node, vm, exp, 'text');
    }

    model(node, vm, exp) {
        // 指定input的value属性
        this.update(node, vm, exp, 'model');
        //视图对模型的响应
        node.addEventListener('input', (e)=>{
            vm[exp] = e.target.value;
    })}
    modelUpdater(node, value) {
        node.value = value
    }

    html(node, vm, exp) {
        this.update(node, vm, exp, 'html')
    }
    htmlUpdater(node, value) {
        node.innerHTML = value
    }

    textUpdater(node, value){
        node.textContent = value
    }
    //事件处理器
    eventHandler(node, vm, exp, dir) {
        let fn = vm.$options.methods && vm.$options.methods[exp]
        if (dir && fn) {
            node.addEventListener(dir, fn.bind(vm));
        }
    }
    isDirective(attr){
        return attr.indexOf('f-') == 0;
    }
    isEvent(attr){
        return attr.indexOf('@') == 0;
    }
    isElement(node){
        return node.nodeType === 1;
    }
    isInterpolation(node){
        return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent);
        // /\{\{(.*)\}\}/.test('{{name}}') 返回：true
        //RegExp.$1 返回：name
    }
}