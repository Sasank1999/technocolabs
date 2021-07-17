const kelvin = prompt('Hey, so what is the Kelvin temperature today?');
//Asking the user to enter tempt in Kelvin

const celsius = kelvin - 273;
//conversation for Kelvin to Celsius by subtracting 273 from the kelvin variable. 
// FYI 71 F is 295 K

let fahrenheit = celsius * (9 / 5) + 32;
//Calculating Fahrenheit converting celsisus to Fahrenheit & rouding

fahrenheit = Math.floor(fahrenheit);
//Doing this to round the Fahrenheit tempt since its in decimal. 

console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);
//Basicaly using string interpolation
