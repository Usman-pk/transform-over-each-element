var map = function(arr, fn) {
    let newArr = [];
    for(let i=0; i<arr.length; i++) {
        newArr.push(fn(arr[i], i));
    }
    return newArr;
};

fn = function plusone(n) { return n + 1; }
arr = [1,2,3]

const newArr = map(arr, fn);
console.log('\nnewArr', newArr);
