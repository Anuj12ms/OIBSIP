var inputTemperature = document.querySelector("#temperature");
var fromUnit = document.querySelector("#in-unit");
var toUnit = document.querySelector("#out-unit");
var output = document.querySelector("#output");
//Adding event listener to convert
document
    .getElementById("convert")
    .addEventListener("click", function () {
        var input = parseFloat(inputTemperature.value);
        var from = fromUnit.value;
        var to = toUnit.value;
        var ans = input;
        if (from === "Fahrenheit") {
            ans += "\u00B0F";
            if (to === "Celsius") {
                ans = convertFromFahrenheit("Celsius", input);
                ans = parseFloat(ans.toFixed(4)) + "\u00B0C";
            } else if (to === "Kelvin") {
                ans = convertFromFahrenheit("Kelvin", input);
                ans = parseFloat(ans.toFixed(4)) + "K";
            }

        } else if (from === "Celsius") {
            ans += "\u00B0C";
            if (to === "Fahrenheit") {
                ans = convertFromCelsius("Fahrenheit", input);
                ans = parseFloat(ans.toFixed(4)) + "\u00B0F";
            } else if (to === "Kelvin") {
                ans = convertFromCelsius("Kelvin", input);
                ans = parseFloat(ans.toFixed(4)) + "K";

            }
        } else {
            ans += "K";
            if (to === "Fahrenheit") {
                ans = convertFromKelvin("Fahrenheit", input);
                ans = parseFloat(ans.toFixed(4)) + "\u00B0F";
            } else if (to === "Celsius") {
                ans = convertFromKelvin("Celsius", input);
                ans = parseFloat(ans.toFixed(4)) + "\u00B0C";
            }
        }

        //displaying the output
        output.innerText = ans;

    })

//function for conversion from fahreheit
function convertFromFahrenheit(toTemp, inputVal) {
    if (toTemp === "Celsius") {
        return (((inputVal - 32) * 5 / 9));
    } else if (toTemp === "Kelvin") {
        return ((inputVal - 32) * 5 / 9 + 273.15);
    }
}

//function for conversion from celsius
function convertFromCelsius(toTemp, inputVal) {
    if (toTemp === "Fahrenheit") {
        return ((inputVal * 9 / 5) + 32);
    } else if (toTemp === "Kelvin") {
        return ((inputVal + 273.15));
    }
}

//function for conversion from kelvin
function convertFromKelvin(toTemp, inputVal) {
    if (toTemp === "Fahrenheit") {
        return ((inputVal - 273.15) * 9 / 5 + 32);
    } else if (toTemp === "Celsius") {
        return (inputVal - 273.15);

    }
}