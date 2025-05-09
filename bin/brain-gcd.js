#!/usr/bin/env node
import playGame from '../src/index.js'
const gcdPlayRools = 'Find the greatest common divisor of given numbers.'

const playGCD = (random) => {
  let a = random(3)
  let b = random()

  let counter = 1
  let gcd = b

  while (b / counter >= 1) {
    gcd = b / counter
    if (Math.floor(b / gcd) * gcd === b) {
      if (Math.floor(a / (gcd)) * gcd === a) {
        return [`${a} ${b}`, `${gcd}`]
      }
    }
    counter++
  }

  return -1
}

playGame(gcdPlayRools, playGCD)
