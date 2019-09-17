let arr = [1,2,3,4,5,6,7,8,12,15,16];
function search(arr,item){
    let low = 0;
    let high = arr.length - 1;
    let mid;
    let element;
    while(low <= high){
        mid = Math.floor((low+high)/2);
        element = arr[mid];
        // console.log(mid)
        if(element < item){
            low = mid + 1
        }else if(element > item){
            high = mid - 1
        }else{
            return mid
        }
    }
    return -1
}
console.log(search(arr,8))