function fib(n){
    if(n == 1 || n == 2){
        return 1;
    }
    return fib(n - 2)+fib(n - 1);
}
console.time('fib');
console.log(fib(5));//当n>43时会耗费几秒时间 时间复杂度指数级
console.timeEnd('fib')