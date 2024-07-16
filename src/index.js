
// You should implement your task here.

module.exports =

    function towelSort(matrix) {
        let a = []
        let b = []
        if (!matrix || !matrix.length) {
            return []
        } else {
            for (i = 0; i < matrix.length; i++) {
                if (i % 2 !== 0) {
                    b = matrix[i].reverse()
                    matrix[i].splice(i, b)
                }
            }
            a = matrix.join(',').split(',').map(Number);
            return a;
        }

    }
