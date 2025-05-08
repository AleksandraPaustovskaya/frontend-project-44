import readline from 'readline-sync'
import name from '../src/cli.js'

const helloWorld = (rool='') => {
  let userName = name()
  if(rool) {
      console.log(rool)
  }
  return userName
}

const randomFrom1to99 = (numberOfNumbers = 2) => {
  let number = 10 ** numberOfNumbers
  const rand = Math.floor(Math.random() * number)
  return Number(rand)
}

const question = (str) => {
  console.log(`Question: `, str)
}

const playGame = (rool, play) => {
  const pleyerName = helloWorld(rool)

  let i = 0

  while (i < 3) {
    const [ask, rightAnswer] = play()
    question(ask)
    const answer = readline.question('Your answer: ')

    // console.log(f)

    rightAnswer === answer ? console.log('Correct!') : i = -1

    i++
    if (i === 0) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`)
      console.log(`Let's try again, ${pleyerName}!`)
      break
    }
    else if (i === 3) {
      console.log(`Congratulations, ${pleyerName}!`)
    }
  }
}

export { randomFrom1to99, playGame, question, helloWorld }
