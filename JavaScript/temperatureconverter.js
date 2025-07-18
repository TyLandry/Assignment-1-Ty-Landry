//References
//https://www.w3schools.com/jsref/jsref_parsefloat.asp
//https://en.wikipedia.org/wiki/Conversion_of_scales_of_temperature
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
//https://www.w3schools.com/jsref/jsref_tofixed.asp

function convertTemperature() {
    const temperatureInput = document.getElementById('temperature').value;// Get the temperature input value
    const unit = document.getElementById('temperature-unit').value;// Get the selected temperature unit
    const results = document.getElementById('conversion-results');// Get the results display element

    // Clear previous results
    results.textContent = '';

    try {
        const temperature = parseFloat(temperatureInput); // Parse the input temperature
        
        //Input Validation
        if (isNaN(temperature)) {
            throw 'Invalid input: Please enter a valid number.';
        }

        let fahrenheit, celsius, kelvin; //Variables to hold converted values

        // Convert based on the selcted temperature unit
        if (unit === 'fahrenheit') {
            fahrenheit = temperature;
            celsius = (temperature - 32) * 5 / 9; 
            kelvin = celsius + 273.15;
        } else if (unit === 'celsius') {
            celsius = temperature;
            fahrenheit = (temperature * 9 / 5) + 32;
            kelvin = temperature + 273.15;
        } else if (unit === 'kelvin') {
            kelvin = temperature;
            celsius = temperature - 273.15;
            fahrenheit = (celsius * 9 / 5) + 32;
        }
        // Display the results of converted input
        results.textContent = `
            Fahrenheit: ${fahrenheit.toFixed(2)}°F, 
            Celsius: ${celsius.toFixed(2)}°C, 
            Kelvin: ${kelvin.toFixed(2)}K
        `;
    } catch (error) {
        results.textContent = error; // Display error message
    }
}