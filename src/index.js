module.exports = function reverse (n) {
    return  n < 0 ? +String(n * (-1)).split("").reverse().join("") : +String(n).split("").reverse().join("")
}
