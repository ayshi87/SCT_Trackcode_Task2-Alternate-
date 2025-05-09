document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => handleButtonClick(button.dataset.value));
    });

    document.addEventListener("keydown", (event) => {
        if (/\d/.test(event.key) || '+-*/C='.includes(event.key)) {
            handleButtonClick(event.key);
        }
    });

    function handleButtonClick(value) {
        if (value === 'C') {
            display.value = ''; 
        } else if (value === '=') {
            calculateResult();
        } else {
            display.value += value; 
        }
    }

    function calculateResult() {
        try {
            const result = eval(display.value.replace(/[^-()\d/*+.]/g, '')); 
            display.value = result;
        } catch (error) {
            display.value = 'Error!';
            setTimeout(() => { display.value = ''; }, 1500); 
        }
    }
});