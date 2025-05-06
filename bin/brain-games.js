#!/usr/bin/env node

import name from '../src/cli.js'

let userName = name()
console.log(`Hello, ${userName}!`)
