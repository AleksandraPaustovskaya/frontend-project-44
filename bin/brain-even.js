#!/usr/bin/env node
import readline from 'readline-sync'
import name from '../src/cli.js'

const playEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  let counterAnswers = 0
  let userName = name()

  for (let i = 0; i < 3; i++) {
    let number = Math.floor(Math.random() * 1000 % 1000)
    console.log(`Question:${number}`)
    const evening = readline.question('Your answe: ') === 'yes' ? true : false
    if (number % 2 === 0 && evening) {
      console.log('Correct!')
      counterAnswers++
    }
    else if (number % 2 === 1 && !evening) {
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
playEven();

export default playEven
