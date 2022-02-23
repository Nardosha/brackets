module.exports = function check(str, bracketsConfig) {
    let arr = str.split('')
    if (arr.length % 2 !== 0) return false
    if (arr.length === 0) return true

    for (let i = 0; i < arr.length-1; i++) {

        let current = arr[i];
        let mirror = getMirrorBracket(current, bracketsConfig)
        let nextBracket = arr[i+1]

        if (mirror === nextBracket) {
            arr.splice(i, 2)
            let newStr = arr.join('')

            return check(newStr, bracketsConfig)
        }
    }

    return false
}

function getMirrorBracket(bracket, bracketsConfig) {
    for (let item of bracketsConfig) {
        if (item[0] === bracket) {
            return item[1]
        }
    }
}


