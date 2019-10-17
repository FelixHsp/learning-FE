let event = {
    childrenList: {},//放缓存函数用
    listen(type, fn) {
        if (!this.childrenList[type]) { 
            this.childrenList[type] = []; 
        }//如果chilidrenlist里这个缓存不存在，就先将它创建为空，为后续做准备
        typeof fn == 'function' && this.childrenList[type].push(fn);
        // console.log(this.childrenList)
    },
    touch(type,grade){
        let fns = this.childrenList[type];
        if(!fns && fns === 0){
            return false
        }
        fns.forEach(fn => {
            fn.apply(this,[arguments]);
        });
    }
}

event.listen('math', arguments => {
    console.log(`${arguments[0]}最高分${arguments[1]}`)
})//创建一个订阅者
event.listen('english',arguments => {
    console.log(`${arguments[0]}最高分${arguments[1]}`)
})
event.listen('english',arguments => {
    console.log(`我们班${arguments[0]}最高分${arguments[1]}`)
})
event.touch('math',140);
event.touch('english',145);