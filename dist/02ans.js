// 2. Temperature Converter: Write a program that converts temperatures between Celsius and Fahrenheit scales.
function temperature(kelvin) {
    let Celsius = kelvin - 273.15;
    let Fahrenheit = (Celsius * 9 / 5) + 32;
    console.log(kelvin + "K = " + Celsius.toFixed(2) + "C = " + Fahrenheit.toFixed(2) + "F");
}
temperature(1);
export {};
