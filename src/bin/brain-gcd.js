import readlineSync from 'readline-sync';

export default (name) => {
  console.log('==================================================');
  console.log('Find the greatest common divisor of given numbers.');


  for (let j=0 ; j<3 ; j++) {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    let s = 0;
    for(let i=1 ; i<num2 ; i++){
      if(num1%i==0 && num2%i==0){
        s=i;
      }
    }
    console.log(`Question:${num1} ${num2} `);
    console.log(`NUM ${s}`);
    const answer = readlineSync.question('Your answer: ');
    if(answer==s){
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${s}.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if(j==2){
      console.log(`Congratulations, ${name}!`);
    }
  }
}
