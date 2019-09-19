class FVue {
    constructor(options){
        this.$options = options;
        this.$data = options.data;
        this.observe(this.$data);
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
        Object.defineProperty(obj,key,{
            get(){
                return val;
            },
            set(newVal){
                if(newVal === val) {
                    return;
                }
                val = newVal;
                console.log(`${key}属性更新了：${val}`);
            }
        })
    }
}

//vue数据绑定的原理：利用Object.defineProperty 把data里面的数据都定义一个属性，get和set 对数据进行监听。数据的劫持