#!/usr/bin/env node
import playGame from '../src/index.js'
import playPr from './games/progression'
const progressionPlayRools = 'What number is missing in the progression?'

playGame(progressionPlayRools, playPr)
