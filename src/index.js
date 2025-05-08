import readline from 'readline-sync'
import name from '../src/cli.js'

const helloWorld = () => {
  console.log('Welcome to the Brain Games!')

  console.log('May I have your name?')
  const userName = name()
  console.log(`Hello, ${userName}!`)

  return userName
}

const randomFrom1to99 = (numberOfNumbers = 2) => {
  let number = 10 ** numberOfNumbers
  const rand = Math.floor(Math.random() * number)
  return rand
}

const question = (str1, str2 = '') => {
  console.log(`Question: ${str1} ${str2}`)
}

const playGame = (rool, play) => {
  const pleyerName = helloWorld()

  let i = 0

  console.log(rool)
  while (i < 3) {
    const rightAnswer = play()
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
