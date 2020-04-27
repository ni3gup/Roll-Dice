window.onload = function() {
    init();

    const rollBtn = document.getElementById('generateDice');
    
    rollBtn.addEventListener('click', init);
}

function init() {
    // generate random number
    const number = Math.floor(Math.random() * 6) + 1;
    
    const dices = document.querySelectorAll('.dice');
    
    dices.forEach(function(dice, index) {
        if(index + 1 === number) {
            // show block
            dice.classList.remove('hide');
        } else {
            // hide block
            dice.classList.add('hide');
        }
    });
}