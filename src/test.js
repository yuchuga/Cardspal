//masking
const input = 'S9132338I'
const output = input.replace(/.(?=.{4})/g, "*")
console.log(output)