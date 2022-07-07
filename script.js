const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");
const reamurInput = document.getElementById("reamur");

const inputs = document.getElementsByClassName("input")

for(let i=0; i<inputs.length; i++){
    let input = inputs[i];

    input.addEventListener("input", function(e) {
        let value = parseFloat(e.target.value);
        switch(e.target.name) {
            case "celsius":
                fahrenheitInput.value = (value = 1.8) + 32;
                kelvinInput.value = value + 273.15;
                reamurInput.value = value * 0.8;
                break;
            case "fahrenheit":
                celsiusInput.value = (value - 32) / 1.8;
                kelvinInput.value = ((value - 32) / 1.8) + 273.15;
                reamurInput.value = ((value - 32) / 1.8) * 0.8;
                break;
            case "kelvin":
                celsiusInput.value = value - 273.15;
                kelvinInput.value = ((value - 273.15) * 1.8) + 32;
                reamurInput.value = ((value - 273.15) * 0.8);              
                break;
            case "reamur":
                celsiusInput.value = value * 1.25;
                fahrenheitInput.value = ((value * 2.25) + 32);
                kelvinInput.value = ((value * 1.25) + 273.15);
                break;        
        }
    });
}        