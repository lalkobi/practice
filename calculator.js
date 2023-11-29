const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter two numbers: ', (input) => {
    const numbers = input.split(' ').map(Number);
    const sum = numbers[0] + numbers[1];
    console.log(`Sum of ${numbers[0]} and ${numbers[1]} is: ${sum}`);
    rl.close();
});