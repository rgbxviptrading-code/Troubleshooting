// prediction-script.js

// Voice Message Functionality
function speak(message) {
    const speech = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(speech);
}

// Prediction Logic
function predict(data) {
    // Dummy prediction logic (replace with actual prediction model)
    const average = data.reduce((sum, value) => sum + value, 0) / data.length;
    return average + (Math.random() * 10 - 5); // Simulated prediction
}

// Period Calculation
function calculatePeriod(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const period = end - start; // Difference in milliseconds
    return period / (1000 * 60 * 60 * 24); // Convert to days
}

// Main Function
function main() {
    const testData = [10, 20, 30, 40, 50]; // Sample data for prediction
    const prediction = predict(testData);
    console.log('Predicted Value:', prediction);
    speak(`The predicted value is ${prediction}`);

    // Sample period calculation
    const days = calculatePeriod('2026-04-19', '2026-05-19');
    console.log('Period in days:', days);
}

// Execute main function
main();
