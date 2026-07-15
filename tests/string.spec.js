const{test, expect}=require('@playwright/test')

test('Reverse a string', async function({page}){

let string="Playwright"

let reverse=string.split('').reverse().join()

console.log(reverse)


//Count Characters in String
let str="Hello"

console.log(str.length)

//Remove Duplicate Characters
let str1 = "programming";

let unique = [...new Set(str1)].join('');

console.log(unique);

})

