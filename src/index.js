module.exports = function check(str, bracketsConfig) {
    var str2 = '';
    var waitingBracket = -1;

    for (let i = 0; i < str.length; i++) {
        bracket = str[i];
        findedArr = find(bracketsConfig, bracket);
        if (str2 !== '') {
            waitingBracket = find(bracketsConfig, str2[str2.length - 1])[2]
        } else {
            waitingBracket = 0;
        }
        if (findedArr[1] === 'opened' && bracket !== waitingBracket) {
            str2 += bracket;
        }
        else if (bracket === waitingBracket || findedArr[2] === waitingBracket) {
            str2 = str2.slice(0, -1);
        }
        else {
            return false;
        }
    }

    function find(arr, value) {
        for (var i = 0; i < arr.length; i++)
            if (arr[i][0] === value)
                return [i, 'opened', arr[i][1]];
            else if (arr[i][1] === value)
                return [i, 'closed'];
    }

    console.log(str2 === '');
    return str2 === '';
};
    
