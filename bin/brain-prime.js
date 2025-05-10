#! /usr/bin/env node
import playGame from '../src/index.js'
const primePlayRools = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const playPrime = (random) => {
  const num = random()
  let answer = 'yes'

  for (let i = 2; num / i > 1; i++) {
    if (num % i === 0) {
      answer = 'no'
      return [num, answer]
    }
  }
  return [num, answer]
}

playGame(primePlayRools, playPrime)
