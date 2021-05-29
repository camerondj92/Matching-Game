function rollDice() {
    let goldCoins = 0;
    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        alert('You rolled a ' + roll + '.\n\nGold Coins: ' + goldCoins);
        if (roll === 1) {
            alert('Game over, no more rolls!');
            break;
        }
        if (roll < 4) {
            continue;
        }
        if (roll === 4) {
            if (goldCoins > 0) {
                goldCoins -= 1;
                alert('Oops! There goes a gold coin!')
                continue;
            }
            continue;
        }
        alert('Congratulations, you win ' + roll + ' gold coins!');
        goldCoins += roll;
    }
    alert('You won a total of ' + goldCoins + ' coins!');
}