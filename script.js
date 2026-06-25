let count = 0;

const counter = setInterval(() => {

    count += 250;

    document.getElementById("orders").textContent =
        count.toLocaleString();

    if(count >= 15000){
        clearInterval(counter);
    }

}, 20);


function generateOrder(){

    const protein =
        document.getElementById("protein").value;

    const spice =
        document.getElementById("spice").value;

    document.getElementById("result").textContent =
        `Your custom bowl: ${protein} | ${spice}`;
}


const reviews = [
    '"Best Pad Thai I have ever tasted."',
    '"The purple theme is insanely cool."',
    '"Fresh ingredients and huge portions."',
    '"Worth every peso."'
];

let current = 0;

setInterval(() => {

    current++;

    if(current >= reviews.length){
        current = 0;
    }

    document.getElementById("reviewText").textContent =
        reviews[current];

}, 3000);