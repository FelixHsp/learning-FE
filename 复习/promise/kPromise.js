class kPromise {
    static PENDING = 'PENDING';
    static RESOLVED = 'RESOLVED';
    static REJECTED = 'REJECTED';
    constructor ( handler ) {
        if( typeof handler !== 'function' ) throw new TypeError('Promise resolver undefined is not a function');
        this.resolvedList = [];
        this.rejectedList = [];
        this.status = kPromise.PENDING;
        this.value;
        handler ( this._resolve.bind(this) , this._reject.bind(this) );//如果传的是函数，就执行。
    }
    _resolve(val) {
        // console.log('resolve')
        window.addEventListener( 'message' , () => {
            if(this.status !== kPromise.PENDING ) return;//防止状态二次改变
            this.status = kPromise.RESOLVED; //正常resolve直接调用，this指向window，需在handler里bind一下
            this.value = val;
            let handler;
            while ( handler = this.resolvedList.shift() ) {
                handler(this.value);
            }
        })
        window.postMessage('');
    }
    _reject() {
        window.addEventListener( 'message' , () => {
            if(this.status !== kPromise.PENDING ) return;
            this.status = kPromise.REJECTED;
            let handler;
            while ( handler = this.rejectedList.shift() ) {
                handler();
            }
        })
        window.postMessage('');
    }
    then( resolvedHandler , rejectedHandeler ){
        // resolvedHandler();
        this.resolvedList.push(resolvedHandler);
        this.rejectedList.push(rejectedHandeler);
        return new kPromise ( (resolve , rejecte) => {
            resolve();
        })
        
    }
}

// 1.传空参数进行报错。
// 2.传正确的函数，调用它。
// 3.修改promise状态。