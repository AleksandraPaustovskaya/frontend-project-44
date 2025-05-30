import readline from 'readline-sync'
import userName from '../bin/brain-games.js'

const playGame = (rool, play) => {
  let namePlayer = userName
  const randomFrom1to99 = (numberOfNumbers = 2) => {
    let number = 10 ** numberOfNumbers
    const rand = Math.floor(Math.random() * number)
    return rand
  }

  console.log(rool)
  let i = 0
  while (i < 3) {
    const [number, rightAnswer] = play(randomFrom1to99)
    console.log('Question:', number)
    const answer = readline.question('Your answer: ')

    rightAnswer === answer ? console.log('Correct!') : i = -1

    i++
    if (i === 0) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`)
      console.log(`Let's try again, ${namePlayer}!`)
      break
    }
    else if (i === 3) {
      console.log(`Congratulations, ${namePlayer}!`)
    }
  }
}

export default playGame
