function sing() {
    let result = '';
    for (let i = 0; i < 4; i++) {
        result += 'let it be, '
    }
    result += 'there will be an answer, '
    for (let i = 4; i < 9; i++) {
        result += 'let it be, '
    }
    result += 'whisper words of wisdom, let it be'

    return result;    
}

//Your code above ^^^

console.log(sing());