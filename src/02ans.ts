// 2. Temperature Converter: Write a program that converts temperatures between Celsius and Fahrenheit scales.


function temperature(kelvin:number) {
    let Celsius:number = kelvin - 273.15;
    let Fahrenheit:number = (Celsius * 9/5) + 32;
    console.log(kelvin + "K = " + Celsius.toFixed(2) + "C = " + Fahrenheit.toFixed(2) + "F");
}
temperature(1)
