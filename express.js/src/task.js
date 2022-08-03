// const arr = [1, 2, 3, 4, 5, 6, 7, 9, 8].sort();

// const taskFunc = () => {
//     const arrToRet = [];
//     for (let i = 0; i < arr.length; i++)  if (arr[i] != arr[i + 1] && arr[i] != arr[i - 1]) arrToRet.push(arr[i]);
//     return arrToRet;
// }
// module.exports = { taskFunc }


class Task {
    constructor() {
        this.arr = [1, 2, 3, 4, 5, 6, 7, 9, 8].sort();
    }
    taskFunc = () => {
        const arrToRet = [];
        for (let i = 0; i < this.arr.length; i++)  if (this.arr[i] != this.arr[i + 1] && this.arr[i] != this.arr[i - 1]) arrToRet.push(this.arr[i]);
        return arrToRet;
    }

    taskSplit = () => {
        let outArr = [];
        let littleArr = [];
        for (let i = 0; i < this.arr.length; i++) {
            if (littleArr.length === num) {
                outArr.push(littleArr);
                littleArr = []
            }
            littleArr.push(this.arr[i])
            if (i + 1 == this.arr.length) outArr.push(littleArr);
        }
        return outArr
    }
}

module.exports = { Task }

const task = new Task()
