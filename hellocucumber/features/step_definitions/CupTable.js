
const assert = require('assert');
const { Given, When, Then } = require('cucumber');


function isItEmpty(content) {
    if (content == 'something') {
        return 'filled with something';
    } else if (content == 'water') {
        return 'filled with water';
    } else if (content == 'coffee') {
        return 'filled with coffee'
    }
}

function howMuchContains(quant) {
    if (quant == 'half') {
        return '50%'
    } else if (quant == 'full') {
        return '100%'
    } else if (quant == 'empty') 
        return '0%'
}

Given('A {string}', function (cup) {
    this.cup = cup
});

When('I Ask what contains', function () {
    this.actualAnswer = isItEmpty(this.cup)
});

When('The quantity is {string}', function (quantity) {
    this.actualQuantity = howMuchContains(quantity)
});

Then('The cup should contains {string} {string}', function (expectedAnswerOne, expectedAnswerTwo) {
    assert.equal(this.actualAnswer, expectedAnswerTwo);
    assert.equal(this.actualQuantity, expectedAnswerOne);
});


/*if (this.actualAnswer == expectedAnswer) {
    console.log("The cup contains [" + contenido + "]")
} else { console.log("The cup is empty") }*/
