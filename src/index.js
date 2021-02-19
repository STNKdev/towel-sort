module.exports = function towelSort (matrix) {

    if (matrix === undefined || matrix.length === 0) {
        return [];
    }

    return matrix.reduce((prev, item, index) => {
        if (index % 2 === 0) {
            return prev.concat(item);
        }
        return prev.concat(item.reverse());
    }, []);
}
