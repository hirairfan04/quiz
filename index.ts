#! /usr/bin/env node

import inquirer from "inquirer";

console.log('MULTIPLE CHOICE QUESTIONS')

let userName= await inquirer.prompt([
    {
        name: 'user',
        message: 'Enter your name: ',
        type: 'input'
    }
])


console.log(`Welcome ${userName.user}`)


let question1= await inquirer.prompt([
    {
        name: 'q1',
        message: 'Capital city of Pakistan: ',
        type: 'list',
        choices: ['Karachi', 'Islamabad', 'Lahore', 'Peshawar']
    }
])
let a1
if(question1.q1== 'Islamabad')
    {
        a1=1
    }
else
{
    a1=0
}



let question2= await inquirer.prompt([
    {
        name: 'q2',
        message: 'Fruit name starts with M: ',
        type: 'list',
        choices: ['Apple', 'Mango', 'Lahore', 'Peshawar']
    }
])
let b1
if(question2.q2== 'Mango')
    {
        b1=1
    }
else
{
    b1=0
}



let question3= await inquirer.prompt([
    {
        name: 'q3',
        message: 'How many letters are there in the English alphabet? ',
        type: 'list',
        choices: ['26', '27', '23', '29']
    }
])
let c1
if(question3.q3== '26')
    {
        c1=1
    }
else
{
    c1=0
}




let question4= await inquirer.prompt([
    {
        name: 'q4',
        message: 'How many days are there in a week? ',
        type: 'list',
        choices: ['9', '70', '7', '6']
    }
])
let d1
if(question4.q4== '7')
    {
        d1=1
    }
else
{
    d1=0
}



let question5= await inquirer.prompt([
    {
        name: 'q5',
        message: 'Rainbow consist of how many colors? ',
        type: 'list',
        choices: ['10', '7', '12', '5']
    }
])
let e1
if(question5.q5== '7')
    {
        e1=1
    }
else
{
    e1=0
}



let question6= await inquirer.prompt([
    {
        name: 'q6',
        message: 'What is the national flower of Pakistan? ',
        type: 'list',
        choices: ['Sunflower', 'Tulip', 'Jasmine', 'Rose']
    }
])
let f1
if(question6.q6== 'Jasmine')
    {
        f1=1
    }
else
{
    f1=0
}



let question7= await inquirer.prompt([
    {
        name: 'q7',
        message: 'How many provinces are there in Pakistan? ',
        type: 'list',
        choices: ['6', '5', '4', '3']
    }
])
let g1
if(question7.q7== '4')
    {
        g1=1
    }
else
{
    g1=0
}



let question8= await inquirer.prompt([
    {
        name: 'q8',
        message: 'Who is the founder of Pakistan? ',
        type: 'list',
        choices: ['Allama Iqbal', 'Quaid-e-Azam', 'Sir Syed Ahmed Khan', 'Fatima Jinnah']
    }
])
let h1
if(question8.q8== 'Quaid-e-Azam')
    {
        h1=1
    }
else
{
    h1=0
}



let question9= await inquirer.prompt([
    {
        name: 'q9',
        message: 'Full form of USB: ',
        type: 'list',
        choices: ['Universal Serious Bus', 'Universal Serial Bus', 'Un-universal Serial Bus', 'United Sector Bar']
    }
])
let i1
if(question9.q9== 'Universal Serial Bus')
    {
        i1=1
    }
else
{
    i1=0
}



let question10= await inquirer.prompt([
    {
        name: 'q10',
        message: 'How many months are there in a year that start with "J"? ',
        type: 'list',
        choices: ['1', '5', '3', '4']
    }
])
let j1
if(question10.q10== '3')
    {
        j1=1
    }
else
{
    j1=0
}


let x=a1+b1+c1+d1+e1+f1+g1+h1+i1+j1
console.log(`Hey ${userName.user}! you scored ${x}/10`)