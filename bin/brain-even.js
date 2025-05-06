#!/usr/bin/env node
import readline from 'readline-sync'
import name from '../src/cli.js'

const playEven = () => {
  let counterAnswers = 0
  let userName = name()

  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  for (let i = 0; i < 3; i++) {
    let number = Number(Math.floor(Math.random() * 1000 % 1000))
    console.log(`Question:${number}`)
    const evening = readline.question('Your answe: ') //=== 'yes' ? true : false
    // console.log(evening);
    
    if (number % 2 === 0 && evening === 'yes') {
      console.log('Correct!')
      counterAnswers++
    }
    else if (number % 2 === 1 && evening === 'no') {
      console.log('Correct!')
      counterAnswers++
    }
    else {
      console.log(`Let's try again, ${userName}!`)
      break
    }
    if (counterAnswers === 3) {
      console.log(`Congratulations, ${userName}!`)
    }
  }
}

playEven()

export default playEven
