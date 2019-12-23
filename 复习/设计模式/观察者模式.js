let event = {
    observe: [],
    addOb(ob) {
        this.observe.push(ob);
    },
    notify() {
        let fns = this.observe;
        fns.forEach(fn => {
            fn.update();
        })
    }
}

let subA = {
    update() {
        console.log('小红：我去看我英语成绩是不是班级第一');
    }
};
let subB = {
    update() {
        console.log('小明：我去看我数学成绩是不是班级倒数第一');
    }
};

event.addOb(subA);
event.addOb(subB);

event.notify((() => {
    console.log('班主任：成绩我已以邮件的形式发给大家');
})());