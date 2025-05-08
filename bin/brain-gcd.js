#!/usr/bin/env node
import { getJSDocEnumTag } from 'typescript';
import {randomFrom1to99, playGame} from '../src/index.js'
const gcdPlayRools = 'Find the grietest common divisor of given numbers'

const isGSD = (max, min) => {
    console.log(max, min)
    let counter = 1;
    let gsd = min;
    while (min/counter >= 1) {
        gsd = min/counter
        if (Math.floor(min/gsd)*gsd === min) {
            if (Math.floor(max/(gsd))*gsd === max) {
                return gsd
            }
        }
        counter++
    }
    return gsd
}
const playGCD = () => {
    let a = randomFrom1to99(3)
    let b = randomFrom1to99()

    const answer = a > b ? isGSD(a, b) : isGSD(b, a);
    return `${answer}`;
}

playGame(gcdPlayRools, playGCD)