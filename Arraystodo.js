function pushFront(arr, number) {
    let newArr = [number]
    for (let i = 0; i < arr.length; i++) {
        newArr[i + 1] = arr[i]

    }
    return newArr
}

// console.log(pushFront([5, 7, 2, 3], 8))
// console.log(pushFront([99], 7))


function insertAt(arr, index, val) {
    let newArr = []
    for (let i = index; i < arr.length; i++) {
        if (i === index) {
            newArr.push(val)
        }
        newArr.push(arr[i])
    }
    return arr
}
console.log(insertAt([100, 200, 5], 2, 311))
console.log(insertAt([9, 33, 7], 1, 42))

