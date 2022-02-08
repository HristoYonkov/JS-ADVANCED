function solve (arr, argument) {
    let someBool = boolean(argument);

    function sorting(bool) {
        bool == true ? arr.sort((a, b) => a - b) : arr.sort((a,b) => b - a);
        return arr;
    }

    function boolean (argument) {
        if (argument === 'asc') {
            return true;
        }

        return false;
    }

    return sorting(someBool);
}

solve([14, 7, 17, 6, 8], 'desc');