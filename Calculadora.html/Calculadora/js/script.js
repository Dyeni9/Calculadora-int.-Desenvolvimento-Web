document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('button'));


    buttons.forEach(button => {
        button.addEventListener('click', function(){
            const value = this.getAttribute('data-value');



            if(value === 'c') {
                display.innerText = '0';
            } else if (value === '=') {
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'error';
                }
            } else {
                if (display.innerText === '0' || display.innerText === 'error') {
                    display.innerText = value;
                } else {
                    display.innerText +=value;
                }
            }
        });
    });
});