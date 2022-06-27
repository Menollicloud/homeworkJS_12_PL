let arr = [2, 5, true, "word", 10, function f1() {}];

function copy(list, secondArrg) {
    const newArr = list.slice();

    if(typeof secondArrg === "function") {
        for(let i = 0; i < newArr.length; i++) {
            if(typeof newArr[i] === "number") newArr[i] = secondArrg(newArr[i]);
        }
    }
    return newArr;
}

function mult(a) {
    return a *= 10;
}

newList = copy(arr, mult);
console.log(newList);