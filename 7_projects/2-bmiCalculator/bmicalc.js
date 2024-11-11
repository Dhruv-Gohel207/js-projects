const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const bmiGuids = document.querySelector('#bmiGuids');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        // Show the result
        results.innerHTML = `<span>${bmi}</span>`;

        // Check BMI ranges
        if (bmi < 18.6) {
            bmiGuids.innerHTML = `Your weight is less than 18.6 (Underweight)`;
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            bmiGuids.innerHTML = `Your weight is Normal`;
        } else {
            bmiGuids.innerHTML = `You are Overweight`;
        }
    }

});
