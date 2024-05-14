#! /usr/bin/env node

import inquirer from "inquirer"

const mySentence: {
    sentence : string
} = await inquirer.prompt(
    [
       {
            name: "sentence",
            type: "input",
            message:" Enter your sentence for count the words:"
       }
    ]
)
let words = mySentence.sentence.trim().split(" ")

console.log(words);

console.log(`Your sentence word count is ${words.length}`);

