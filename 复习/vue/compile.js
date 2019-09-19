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
                console.log('编译元素'+node.nodeName);
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
        node.textContent = this.$vm.$data[RegExp.$1];//只能初始化一次
    }
    isElement(node){
        return node.nodeType === 1;
    }
    isInterpolation(node){
        return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent);
    }
}