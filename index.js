function findMinAndRemoveSorted(array) {
    let min = array[0]
    array.splice(0, 1)
    return min
}

function merge(firstHalf, secondHalf) {
    let sorted = []
    while (firstHalf.length != 0 && secondHalf.length != 0) {
        if (firstHalf[0] < secondHalf[0]) {
            sorted.push(findMinAndRemoveSorted(firstHalf))
        } else {
            sorted.push(findMinAndRemoveSorted(secondHalf))
        }
    }
    return sorted.concat(firstHalf).concat(secondHalf)
}

function mergeSort(array) {
    let middleIndex = array.length/2
    let firstHalf = array.slice(0, middleIndex)
    let secondHalf = array.slice(middleIndex, array.length)
    if (array.length < 2) {
        return array
    } else {
        return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
}