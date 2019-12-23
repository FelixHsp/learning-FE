let event = {
    // 放订阅事件,一个订阅事件中可能会有多个函数，所以我们这里用一下对象
    childrenList: {},
    // 订阅函数
    listen(type, fn) {
        //如果chilidrenlist里这个缓存不存在，就先将它创建为空，为后续做准备
        if (!this.childrenList[type]) {
            this.childrenList[type] = [];
        }
        // 判断传进来的是否是一个函数，若是就加到childrenList[type]下的数组中等待执行
        typeof fn == 'function' && this.childrenList[type].push(fn);
        // console.log(this.childrenList)
    },
    // 发布函数
    touch(type) {
        let fns = this.childrenList[type];
        if (!fns && fns === 0) {
            return false
        }
        fns.forEach(fn => {
            fn.apply(this, [arguments]);
        });
    }
};
/**
 * 创建一个订阅小红
 */
event.listen('小红', arguments => {
    console.log(`${arguments[0]}，${arguments[1]}`)
});
event.listen('小红', arguments => {
    console.log(`大家注意，我们班的${arguments[0]}。${arguments[1]}`)
});
/**
 * 创建一个订阅小明
 */
event.listen('小明', arguments => {
    console.log(`${arguments[0]}，${arguments[1]}`)
});
/**
 * 向小红订阅事件发布消息
 */
event.touch('小红', '这次考试英语成绩年纪第一');
/**
 * 向小明订阅事件发布消息
 */
event.touch('小明', '小明不出你的意料，你数学成绩还是倒数第一');