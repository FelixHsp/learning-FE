
let arr = [3,4,2,4,5,6,13,1,32,43];


//普通冒泡排序 复杂度（On=n^2）
function sort(arr){
    for(let j = 0 ; j < arr.length-1 ; j++){
        for(let i = 0 ; i < arr.length-1 ; i++){
            if( arr[i] > arr[i+1] ){
                let temp;
                temp = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = temp;
            }
        }
    }
    console.log(arr);
}
// sort(arr);

//优化冒泡排序 复杂度（On=(n^2)/2)
function sort1(arr){
    console.time('sort1');
    for(let j = 0 ; j < arr.length-1 ; j++){
        for(let i = 0 ; i < arr.length-1-i ; i++){
            if( arr[i] > arr[i+1] ){
                let temp;
                temp = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = temp;
            }
        }
    }
    console.timeEnd('sort1');
    console.log(arr);
}
sort1(arr);