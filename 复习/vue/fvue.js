//vue数据绑定的原理：利用Object.defineProperty 把data里面的数据都定义一个属性，get和set 对数据进行监听。数据的劫持
class FVue {
    constructor(options){
        this.$options = options;
        this.$data = options.data;
        this.observe(this.$data);

        //模拟watcher创建
        // new Watcher();
        // this.$data.test;
        // new Watcher();
        // this.$data.foo.bar;
        new Compile(options.el, this);
        if(options.created){
            options.created.call(this)
        }
    }
    observe(value) {
        if(!value || typeof value !== 'object'){
            return;
        }
        Object.keys(value).forEach(key => {
            this.defineReactive(value ,key ,value[key])
        })
    }
    //数据响应话函数 defineReactive
    defineReactive(obj ,key ,val ){
        this.observe(val);//递归解决数据嵌套
        const dep = new Dep();
        Object.defineProperty(obj,key,{
            get(){
                Dep.target && dep.addDep(Dep.target);//激活Watcher
                return val;
            },
            set(newVal){
                if(newVal === val) {
                    return;
                }
                val = newVal;
                // console.log(`${key}属性更新了：${val}`);
                dep.notify();
            }
        })
    }
}
//依赖依靠属性，一个属性一个依赖，一个依赖可能对应多个Watcher
class Dep{
    constructor(){
        this.deps = [];
    }
    addDep(dep) {
        this.deps.push(dep)
    }
    notify() {
        this.deps.forEach(dep => dep.update())
    }
}

class Watcher{
    constructor(){
        //将当前watcher的实例指定到Dep静态属性target
        Dep.target = this;
    }
    update() {
        console.log('属性更新了')
    }
}