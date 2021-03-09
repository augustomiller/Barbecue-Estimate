let inputAdults = document.getElementById("adults");
let inputChildren = document.getElementById("children");
let inputDuration = document.getElementById("duration");

let result = document.getElementById("result");

function calculate() {

    let amountAdult = inputAdults.value;
    let amountChildren = inputChildren.value;
    let amountDuration = inputDuration.value;

    let amountTotalBeef = (amountOfMeatPerPerson(amountDuration) * amountAdult + (amountOfMeatPerPerson(amountDuration) / 2 * amountChildren));
    let amountTotalAlcoholicDrink = (alcoholicBeveragePerPerson(amountDuration) * amountAdult);
    let amountTotalnonAlcoholicDrink = (nonAlcoholicBeveragePerPerson(amountDuration) * amountAdult + (nonAlcoholicBeveragePerPerson(amountDuration) / 2 * amountChildren));

    if (amountTotalBeef && amountTotalAlcoholicDrink && amountTotalnonAlcoholicDrink != 0) {
        result.innerHTML = `<p>${amountTotalBeef / 1000}kg of the beef</p>`;
        result.innerHTML += `<p>${Math.ceil(amountTotalAlcoholicDrink / 355)} Alcoholic beverage cans</p>`;
        result.innerHTML += `<p>${Math.ceil(amountTotalnonAlcoholicDrink / 2000)} Pet's(2-liters) of the non alcoholic drink's</p>`;
    } else {
        result.innerHTML = `<p>No value was selected, select the correct amount for us to estimate ;)</p>`;
    }

}


function amountOfMeatPerPerson(duration) {

    const gramsOfMeetLess6hours = 400;
    const gramsOfMeetLonger6hours = 650;

    if (duration >= 6) {
        return gramsOfMeetLonger6hours;
    } else {
        return gramsOfMeetLess6hours;
    }
}

function alcoholicBeveragePerPerson(alcoholicDrinkPerHours) {

    const litersOfDrinkLess6hours = 1200;
    const litersOfDrinkLong6hours = 2000;

    if (alcoholicDrinkPerHours >= 6) {
        return litersOfDrinkLong6hours;
    } else {
        return litersOfDrinkLess6hours;
    }
}

function nonAlcoholicBeveragePerPerson(nonAlcoholicDrinkPerHours) {

    const litersOfDrinkLess6hours = 100;
    const litersOfDrinkLong6hours = 1500;

    if (nonAlcoholicDrinkPerHours >= 6) {
        return litersOfDrinkLong6hours;
    } else {
        return litersOfDrinkLess6hours;
    }
}