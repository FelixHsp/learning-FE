let arr = [10, 11, 12, 13, 9, 8, 7,14];
//复杂度 (On=log2N) 空间占用多，额外占用left，right两个数组
function quickSort(arr) {
    if (arr.length < 1) {
        return arr
    }
    let left = [];
    let right = [];
    let flag = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[0]) {
            left.push(arr[i])
        } else if (arr[i] > arr[0]) {
            right.push(arr[i])
        }
    }
    //递归
    // return quickSort(left).concat([flag]).concat(quickSort(right))
    return [...quickSort(left), flag, ...quickSort(right)]
}
console.log(quickSort(arr));
function quickSort2(arr) {
    if(arr.length <= 1){
        return arr;
    }
    let flag = arr[arr.length-1];
    let i = 0;
    let j = arr.length - 2;
    while(i < j){
        let flag = arr[arr.length-1];
        while(arr[j] > flag && i<j){
            j--;
        }
        while(arr[i] < flag && i<j){
            i++;
        }
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

    }
    var left,right;
    if(arr[i]<flag){
        left = arr.slice(0,i+1) ;
        right = arr.slice(i+1,arr.length-1);
    }
    if(arr[i]>=flag){
        left = arr.slice(0,i) ;
        right = arr.slice(i,arr.length-1);
    }
    return [...quickSort2(left) , flag , ...quickSort2(right)];
}
console.log(quickSort2(arr))