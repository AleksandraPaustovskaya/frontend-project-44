#!/usr/bin/env node

import readlineSync from 'readline-sync';

export default askingName =>  {

	console.log('May I have your name?');

	const name = readlineSync.question('Your answer: ');
	console.log(`Hello, ${name}!`);
	}
