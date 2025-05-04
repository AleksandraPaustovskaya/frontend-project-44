#!/usr/bin/env node
import readlineSync from 'readline-sync'

const isName = () => {
  console.log('May I have your name?')

  const name = readlineSync.question('Your answer: ')
  return name
}

isName()

export default isName
