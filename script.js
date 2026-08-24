const button = document.getElementById('calculate')
const autoCalculate = document.getElementById('auto-calculate');
const doseInput = document.getElementById('dose');
const roastInputs = document.querySelectorAll(
    'input[name="roast"]'
);
const doseDisplay = document.getElementById("dose-display");

function calculate() {
    const dose = Number(doseInput.value);
    const roast = document.querySelector(
        'input[name="roast"]:checked'
    ).value;

    if (dose == 0) {
        alert("Please enter a dose.")
        return;
    }

    if (dose < 5 || dose > 30) {
        alert("Please enter a dose between 5 and 30 grams");
        return;
    }


    let ratio;
    let time;

    if (roast === "light") {
        ratio = 2.75;
        time = "28-35";
    }
    else if (roast === "light-medium") {
        ratio = 2.5;
        time = "27-34";
    }
    else if (roast === "medium") {
        ratio = 2.25;
        time = "25-32";
    }
    else if (roast === "medium-dark") {
        ratio = 2.0;
        time = "24-30";
    }
    else if (roast === "dark") {
        ratio = 1.75;
        time = "22-28";
    }

    const outputWeight = dose * ratio;

    document.getElementById("output").textContent =
        outputWeight.toFixed(1) + " g";

    document.getElementById("time").textContent =
        time + " sec";

    document.getElementById("ratio").textContent =
        "1:" + ratio;

    document.getElementById("input-dose").textContent =
        dose.toFixed(1) + " g"



};

button.addEventListener('click', calculate);

autoCalculate.addEventListener('change', function() {
    if (autoCalculate.checked) {
        button.style.display = "none";
    }
    else {
        button.style.display = "block";
    }
});

doseInput.addEventListener('input', function() {
    if (autoCalculate.checked) {
        calculate();
    }
})

roastInputs.forEach(function (roastInput) {

    roastInput.addEventListener("change", function () {

        if (autoCalculate.checked) {
            calculate();
        }

    });

});

doseInput.addEventListener("input", function () {
    doseDisplay.textContent = doseInput.value + " g";

    if (autoCalculate.checked) {
        calculate();
    }
});



