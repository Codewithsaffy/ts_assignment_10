// BMI Calculator: Write a program that calculates the Body Mass Index (BMI) based on a person's weight and height.
function bmiCalculator(weight, height) {
    let bmi = weight / ((height * height) / 10000);
    if (bmi < 18.5) {
        console.log("Underweight");
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        console.log("Normal");
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        console.log("Overweight");
    }
    else if (bmi >= 30) {
        console.log("Obese");
    }
}
bmiCalculator(60, 1.6);
export {};
