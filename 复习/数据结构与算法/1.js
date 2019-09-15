let arr = [1,2,3,4,5,6,7,8,9,10];
let sum = 6;

function add( arr , sum ){
    for(let i = 0 ;i < arr.length ;i++){
        for(let j = i ; j < arr.length ;j++){
            if(arr[i]+arr[j] == sum && arr[i] != arr[j]){
                console.log(arr[i],arr[j])
            }
        }
    }
}

add (arr , sum)