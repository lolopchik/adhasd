let placesNode = document.querySelector(`.places`);
let x1y1 = placesNode.querySelector(`#x1y1`);
let x1y2 = placesNode.querySelector(`#x1y2`);
let x1y3 = placesNode.querySelector(`#x1y3`);
let x1y4 = placesNode.querySelector(`#x1y4`);
let x2y1 = placesNode.querySelector(`#x2y1`);
let x2y2 = placesNode.querySelector(`#x2y2`);
let x2y3 = placesNode.querySelector(`#x2y3`);
let x2y4 = placesNode.querySelector(`#x2y4`);
let x3y1 = placesNode.querySelector(`#x3y1`);
let x3y2 = placesNode.querySelector(`#x3y2`);
let x3y3 = placesNode.querySelector(`#x3y3`);
let x3y4 = placesNode.querySelector(`#x3y4`);

x1y1.addEventListener(`click`, function() {
    let place = x1y1;
    if (place.classList.contains(`active`)) {
        place.classList.remove(`active`);
        price -= 600;
        placesCounter--;
    } else {
        place.classList.add(`active`);
        price += 600;
        placesCounter++;
    }
    placeCountNode.innerHTML = placesCounter;
    priceNode.innerHTML = price;
});
x1y2.addEventListener(`click`, function() {
    let place = x1y2;
    if (place.classList.contains(`active`)) {
        place.classList.remove(`active`);
        price -= 600;
        placesCounter--;
    } else {
        place.classList.add(`active`);
        price += 600;
        placesCounter++;
    }
    placeCountNode.innerHTML = placesCounter;
    priceNode.innerHTML = price;
});
x1y3.addEventListener(`click`, function() {
    let place = x1y3;
    if (place.classList.contains(`active`)) {
        place.classList.remove(`active`);
        price -= 600;
        placesCounter--;
    } else {
        place.classList.add(`active`);
        price += 600;
        placesCounter++;
    }
    placeCountNode.innerHTML = placesCounter;
    priceNode.innerHTML = price;
});
x1y4.addEventListener(`click`, function() {
    let place = x1y4;
    if (place.classList.contains(`active`)) {
        place.classList.remove(`active`);
        price -= 600;
        placesCounter--;
    } else {
        place.classList.add(`active`);
        price += 600;
        placesCounter++;
    }
    placeCountNode.innerHTML = placesCounter;
    priceNode.innerHTML = price;
});
x2y1.addEventListener(`click`, function() {
    let place = x2y1;
    if (place.classList.contains(`active`)) {
        place.classList.remove(`active`);
        price -= 500;
        placesCounter--;
    } else {
        place.classList.add(`active`);
        price += 500;
        placesCounter++;
    }
    placeCountNode.innerHTML = placesCounter;
    priceNode.innerHTML = price;
});
x2y2.addEventListener(`click`, function() {
    let place = x2y2;
    if (place.classList.contains(`active`)) {
        place.classList.remove(`active`);
        price -= 500;
        placesCounter--;
    } else {
        place.classList.add(`active`);
        price += 500;
        placesCounter++;
    }
    placeCountNode.innerHTML = placesCounter;
    priceNode.innerHTML = price;
});
x2y3.addEventListener(`click`, function() {
    let place = x2y3;
    if (place.classList.contains(`active`)) {
        place.classList.remove(`active`);
        price -= 500;
        placesCounter--;
    } else {
        place.classList.add(`active`);
        price += 500;
        placesCounter++;
    }
    placeCountNode.innerHTML = placesCounter;
    priceNode.innerHTML = price;
});
x2y4.addEventListener(`click`, function() {
    let place = x2y4;
    if (place.classList.contains(`active`)) {
        place.classList.remove(`active`);
        price -= 500;
        placesCounter--;
    } else {
        place.classList.add(`active`);
        price += 500;
        placesCounter++;
    }
    placeCountNode.innerHTML = placesCounter;
    priceNode.innerHTML = price;
});
x3y1.addEventListener(`click`, function() {
    let place = x3y1;
    if (place.classList.contains(`active`)) {
        place.classList.remove(`active`);
        price -= 400;
        placesCounter--;
    } else {
        place.classList.add(`active`);
        price += 400;
        placesCounter++;
    }
    placeCountNode.innerHTML = placesCounter;
    priceNode.innerHTML = price;
});
x3y2.addEventListener(`click`, function() {
    let place = x3y2;
    if (place.classList.contains(`active`)) {
        place.classList.remove(`active`);
        price -= 400;
        placesCounter--;
    } else {
        place.classList.add(`active`);
        price += 400;
        placesCounter++;
    }
    placeCountNode.innerHTML = placesCounter;
    priceNode.innerHTML = price;
});
x3y3.addEventListener(`click`, function() {
    let place = x3y3;
    if (place.classList.contains(`active`)) {
        place.classList.remove(`active`);
        price -= 400;
        placesCounter--;
    } else {
        place.classList.add(`active`);
        price += 400;
        placesCounter++;
    }
    placeCountNode.innerHTML = placesCounter;
    priceNode.innerHTML = price;
});
x3y4.addEventListener(`click`, function() {
    let place = x3y4;
    if (place.classList.contains(`active`)) {
        place.classList.remove(`active`);
        price -= 400;
        placesCounter--;
    } else {
        place.classList.add(`active`);
        price += 400;
        placesCounter++;
    }
    placeCountNode.innerHTML = placesCounter;
    priceNode.innerHTML = price;
});



let placeCountNode = document.querySelector(`#place-count`);
let priceNode = document.querySelector(`#price`);

let placesCounter = 0;
let price = 0;


let clear = document.querySelector(`#clear`)
clear.addEventListener(`click`, function () {

    x1y1.classList.remove(`active`); // Как удалить класс "active" у кнопок?
    x1y2.classList.remove(`active`);
    x1y3.classList.remove(`active`);
    x1y4.classList.remove(`active`);
    x2y1.classList.remove(`active`);
    x2y2.classList.remove(`active`);
    x2y3.classList.remove(`active`);
    x2y4.classList.remove(`active`);
    x3y1.classList.remove(`active`);
    x3y2.classList.remove(`active`);
    x3y3.classList.remove(`active`);
    x3y4.classList.remove(`active`);
    
    price = 0;
    placesCounter = 0;

    placeCountNode.innerHTML = placesCounter;
    priceNode.innerHTML = price

});

