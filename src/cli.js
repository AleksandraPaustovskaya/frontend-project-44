#!/usr/bin/env node
import readlineSync from 'readline-sync'

const isName = () => {
  const name = readlineSync.question('Your answer: ')

  return name
}

export default isName
