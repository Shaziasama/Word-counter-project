#! /usr/bin/env
// import the inquirer module which is a command line interference  for Node.js
import { log } from "console";
import inquirer from "inquirer";

const answers: {
    sentencees: string
} = await inquirer.prompt([
    {
        type: "input",
        name: "sentencees",
        message: "Enter your sentence to count the word:"
    }
]);

const words = answers.sentencees.trim().split(" ");

//print the array of word to the console 
console.log(words);

//print the word count of the sentence to the console
console.log(`Your sentences word count is ${(words.length)}`);