let arr = [10,11,12,13,9,8,7];

function quickSort(arr){
    if(arr.length < 1){
        return arr
    }
    let left = [];
    let right = [];
    let flag = arr[0];
    for(let i = 1;i < arr.length;i++){
        if(arr[i] <= arr[0]){
            left.push(arr[i])
        }else if(arr[i] > arr[0]){
            right.push(arr[i])
        }
    }
    //递归
    return quickSort(left).concat([flag]).concat(quickSort(right))
    return [...left,flag,...right]
}
console.log(quickSort(arr));