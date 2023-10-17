// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix[0] === "" || matrix[0] === false) {
        return matrix;
    }
    let arr = [];
    let arr1;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > 0) {
                arr.push(matrix[i][j]);
            } else {
                arr1 = matrix[i][j] * -1;
                arr.push(arr1);
            }
        }
    }

    return arr;
};
