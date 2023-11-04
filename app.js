let resultBtn = document.querySelector(".result");
let selects = document.querySelectorAll(".options select");
let sel1 = selects[0];
let sel2 = selects[1];
let inputs = document.querySelectorAll(".input input");
let inp1 = inputs[0];
let inp2 = inputs[1];

function convertTemperature() {
    let inputValue = sel1.value;
    let outputValue = sel2.value;
    if (inputValue === "celsius" && outputValue === "fahrenheit") {
        inp2.value = Number(inp1.value * 9 / 5 + 32);
    } else if (inputValue === "celsius" && outputValue === "kelvin") {
        inp2.value = Number(parseFloat(inp1.value) + 273.15);
    } else if (inputValue === "celsius" && outputValue === "celsius") {
        inp2.value = Number(inp1.value);
    } else if (inputValue === "kelvin" && outputValue === "fahrenheit") {
        inp2.value = Number((inp1.value - 273.15) * 9 / 5 + 32);
    } else if (inputValue === "kelvin" && outputValue === "celsius") {
        inp2.value = Number(parseFloat(inp1.value) - 273.15);
    } else if (inputValue === "kelvin" && outputValue === "kelvin") {
        inp2.value = Number(inp1.value);
    } else if (inputValue === "fahrenheit" && outputValue === "celsius") {
        inp2.value = Number((inp1.value - 32) * 5 / 9);
    } else if (inputValue === "fahrenheit" && outputValue === "kelvin") {
        inp2.value = Number((inp1.value - 32) * 5 / 9 + 273.15);
    } else if (inputValue === "fahrenheit" && outputValue === "fahrenheit") {
        inp2.value = Number(inp1.value);
    }
}

resultBtn.addEventListener("click",convertTemperature);


