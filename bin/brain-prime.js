#! /usr/bin/env node
import playGame from '../src/index.js'
import playP from '../bin/games/prime'

const primePlayRools = 'Answer "yes" if given number is prime. Otherwise answer "no".'

playGame(primePlayRools, playP)
