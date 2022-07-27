function uniTotal(string) {
    // total up dem unicodes!
    let total = 0;
    for (let index = 0; index < string.length; index++) {
        let numberOfChar = string.charCodeAt(index)
        total = total + numberOfChar;
    }
    return total;
}