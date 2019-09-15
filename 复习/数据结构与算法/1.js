let arr = [1,2,3,4,5,6,7,8,9,10];
let sum = 6;

//两次循环
/* function add( arr , sum ){
    for(let i = 0 ;i < arr.length ;i++){
        for(let j = i ; j < arr.length ;j++){
            if(arr[i]+arr[j] == sum && arr[i] != arr[j]){
                console.log(arr[i],arr[j])
            }
        }
    }
} */

//一次循环
function add(arr,sum){
    let obj = {}
    arr.forEach( (v,i) => {
        if(String (v) in obj ){
            console.log('找到了')
            console.log(obj[v] , i)
        }
        obj[sum - v] = i
    });
}