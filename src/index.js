import readline from 'readline-sync'
import name from '../src/cli.js'
const userName = name()


const randomFrom1to99 = () => {
    const rand = Math.floor(Math.random() * 100)
    return rand
  }

const playGame = (rool, play) => {
    let i = 3;

    console.log(rool)
    while (i > 0) {
    const f = play()
    const answer = Number(readline.question('Your answer: '))

    console.log(f)

    f === answer ? console.log('Correct!') : i = 0;
      
      i--
    }
    console.log(i === 0 ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`) 
    

}

export {randomFrom1to99, playGame}