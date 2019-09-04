class kPromise {
    static PENDING = 'PENDING';
    static RESOLVED = 'RESOLVED';
    static REJECTED = 'REJECTED';
    constructor ( handler ) {
        if( typeof handler !== 'function' ) throw new TypeError('Promise resolver undefined is not a function');
        
        this.status = kPromise.PENDING;

        handler ( this._resolve.bind(this) , this._reject.bind(this) );//如果传的是函数，就执行。
        
    }
    _resolve() {
        // console.log('resolve')
        if(this.status !== kPromise.PENDING ) return;//防止状态二次改变
        this.status = kPromise.RESOLVED; //正常resolve直接调用，this指向window，需在handler里bind一下
    }
    _reject() {
        if(this.status !== kPromise.PENDING ) return;
        this.status = kPromise.REJECTED;
    }
}