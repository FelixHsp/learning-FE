function fib(n){
    if(n == 1 || n == 2){
        return 1;
    }
    return fib(n - 2)+fib(n - 1);
}
// console.time('fib');
// console.log(fib(5));//当n>43时会耗费几秒时间 时间复杂度指数级
// console.timeEnd('fib')

function fib1(n){
    let arr = [];
    return fibCache(arr,n);
}
function fibCache(arr,n){
    if(n == 1 || n == 2){
        return 1;
    }
    if(arr[n]){
        return arr[n];
    }
    arr[n] = fibCache(arr,n-1)+fibCache(arr,n-2);
    return arr[n]
}
console.time('fib');
console.log(fib1(100));//缓存递归，毫秒级
console.timeEnd('fib')