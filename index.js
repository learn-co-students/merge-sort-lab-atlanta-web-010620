function findMinAndRemoveSorted(array){
    array.sort((a,b) => a-b); 
    return array.shift();
}

function merge(a1,a2){
    let newArray = []; 
    while (a1.length != 0 && a2.length != 0){
        if (a1[0] < a2[0]){
            newArray.push(findMinAndRemoveSorted(a1))
        }else{
            newArray.push(findMinAndRemoveSorted(a2))
        }
    }
    return newArray.concat(a1).concat(a2); 
}

function mergeSort(array){
    let middle = array.length/2; 
    let firstHalf = array.slice(0,middle); 
    let secondHalf = array.slice(middle, array.length)

    if (array.length < 2){
        return array; 
    }else{
        return merge(mergeSort(firstHalf), mergeSort(secondHalf)); 
    }
}
