#!/usr/bin/env node
import readlineSync from 'readline-sync'

const isName = () => {
  console.log('Welcome to the Brain Games!')

  console.log('May I have your name?')

  const name = readlineSync.question('Your answer: ')
  return name
}

export default isName
