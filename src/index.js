import readline from 'readline-sync'
import name from '../src/cli.js'
const userName = name()


const randomFrom1to99 = (numberOfNumbers = 2) => {
    let number = 10**numberOfNumbers
    const rand = Math.floor(Math.random() * number)
    return rand
}


const playGame = (rool, play) => {
    let i = 0;

    console.log(rool)
    while (i < 3) {
    const rightAnswer = play()
    const answer = readline.question('Your answer: ')

    // console.log(f)

    rightAnswer === answer ? console.log('Correct!') : i =-1;
      
      i++
      if (i === 0) {


        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'\nLet's try again, ${userName}!`)
        break
      } else if (i === 3) {
        console.log(`Congratulations, ${userName}!`)
      }

    }

}

export {randomFrom1to99, playGame}