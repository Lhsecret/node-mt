function getRandomString(number){
    let randomString = ''
    for(let i = 0;i < number;i++){
        const range = Math.floor(Math.random() * 26)
        const start = "a".charCodeAt(0)
        randomString += String.fromCharCode(start+range)
    }
    return randomString
}

module.exports = getRandomString