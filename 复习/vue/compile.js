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
}