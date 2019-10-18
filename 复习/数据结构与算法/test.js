let arr = [10, 11, 12, 13, 9, 8, 7,14];//[1,3,4,6,5,2,7,8,6,9]
function quickSort(arr){
    if(arr.length < 1){
        return arr
    }
    let flag = arr[0];
    let left = [];
    let right = [];
    for(let i = 1 ;i < arr.length;i++){
        if(arr[i] <= flag){
            left.push(arr[i]);
        }else if(arr[i] > flag){
            right.push(arr[i]);
        }
    }
    return [...quickSort(left),flag,...quickSort(right)]
}
console.log(quickSort(arr));

function quickSort2(arr){
    if(arr.length <= 1){
        return arr;
    }
    let flag = arr[0];
    let i = 1;
    let j = arr.length - 1;
    while(i < j){
        let flag = arr[0];
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
        left = arr.slice(1,i+1) ;
        right = arr.slice(i+1,arr.length);
    }
    if(arr[i]>=flag){
        left = arr.slice(1,i) ;
        right = arr.slice(i,arr.length);
    }
    return [...quickSort2(left),flag,...quickSort2(right)];
}
console.log(quickSort2(arr));