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

    result.innerHTML = `<p>${amountTotalBeef}g of the beef</p>`;
    result.innerHTML += `<p>${amountTotalAlcoholicDrink}ml of the alcoholic drink</p>`;
    result.innerHTML += `<p>${amountTotalnonAlcoholicDrink}ml of the non alcoholic drink's</p>`;

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