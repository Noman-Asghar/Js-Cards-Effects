// ++++++++++++++++++++++ function one ++++++++++++++++++++++++++++++++++++++

let div = document.getElementById('card1');
let fName = document.getElementById('fName');
let lName = document.getElementById('lName');
let p = document.createElement('p')


div.append(p)

function fullName(){

    let firstValue = String(fName.value);
    let lastValue = String(lName.value);
    let fullName = firstValue + lastValue

    p.style.color = "white"
    p.style.fontSize = "20px"
    p.style.backgroundColor = " rgb(23, 165, 23)"
    p.style.marginTop= "20px"
    p.style.zIndex = "10"


    p.innerText = fullName
}

// ++++++++++++++++++++++++++ function Two ++++++++++++++++++++++++++++++++++++++++++
let div1 = document.getElementById('card2')
let value1 = document.getElementById('value-a');
let value2 = document.getElementById('value-b');

let p1 = document.createElement('p');

div1.append(p1)

function squareFormula(){

    let valueA = Number(value1.value)
    let valueB = Number(value2.value)

    let formula = (valueA + valueB)**2

    p1.style.color = "black"
    p1.style.fontSize = "20px"
    p1.style.backgroundColor = "rgb(212, 248, 37)"
    p1.style.marginTop= "20px"
    p1.style.zIndex = "11"

    p1.innerText = formula


}

// ++++++++++++++++++++++++++ function Three ++++++++++++++++++++++++++++++++++++++++++
let div2 = document.getElementById('card3')
let valueOfA = document.getElementById('valueA');
let valueOfB = document.getElementById('valueB');

let p2 = document.createElement('p');

div2.append(p2)

function polinomialEq(){

    let valueA = Number(valueOfA.value)
    let valueB = Number(valueOfB.value)

    let result = valueA - valueB

    p2.style.color = "white"
    p2.style.fontSize = "20px"
    p2.style.backgroundColor = "rgb(210, 30, 195)"
    p2.style.marginTop= "20px"
    p2.style.zIndex = "12"

    p2.innerText = result


}


// ++++++++++++++++++++++++++ function Four ++++++++++++++++++++++++++++++++++++++++++
let div3 = document.getElementById('card4')
let valueFirst = document.getElementById('value1');
let valueSec = document.getElementById('value2');

let p3 = document.createElement('p');

div3.append(p3)

function toMultiply(){

    let valueA = Number(valueFirst.value)
    let valueB = Number(valueSec.value)

    let result = valueA * valueB

    p3.style.color = "white"
    p3.style.fontSize = "20px"
    p3.style.backgroundColor = "rgb(10, 226, 245)"
    p3.style.marginTop= "20px"
    p3.style.zIndex = "13"

    p3.innerText = result


}

// ++++++++++++++++++++++++++ function Five ++++++++++++++++++++++++++++++++++++++++++
let div4 = document.getElementById('card5')
let kiloM = document.getElementById('km');


let p4 = document.createElement('p');

div4.append(p4)

function toMeter(){

    let kilo = Number(kiloM.value)
    

    let meter = kilo * 1000

    p4.style.color = "white"
    p4.style.fontSize = "20px"
    p4.style.backgroundColor = " rgb(240, 26, 105)"
    p4.style.marginTop= "20px"
    p4.style.zIndex = "14"
    

    p4.innerText = meter
}

// ++++++++++++++++++++++++++++++++++Cards effect ++++++++++++++++++++++++++

let cards = document.querySelectorAll('.cards');
 cards.forEach(card=>{

     card.onmousemove = function(e){
         let x = e.pageX - card.offsetLeft;
         let y = e.pageY - card.offsetTop;

         card.style.setProperty('--x',x + 'px');
         card.style.setProperty('--y',y + 'px');
     }
 })


