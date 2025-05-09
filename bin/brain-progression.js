#!/usr/bin/env node
import playGame from '../src/index.js'
const progressionPlayRools = 'What number is missing in the progression?'

const playProgression = (random) => {
  let quantityOfProgression = 10
  let stepOfProgression = random(1)
  let positionStealth = Number(random(1))
  const progressionCollect = [random(1)]

  for (let i = 1; i < quantityOfProgression; i++) {
    let nextElement = progressionCollect[i - 1] + stepOfProgression
    progressionCollect.push(nextElement)
  }
  let answer = progressionCollect[positionStealth]
  progressionCollect[positionStealth] = '..'

  const questionProg = progressionCollect.join(' ')

  return [questionProg, `${answer}`]
}

playGame(progressionPlayRools, playProgression)
