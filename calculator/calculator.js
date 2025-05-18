
    const display = document.querySelector('input[type="text"]');

   
    const buttons = document.querySelectorAll('input[type="button"]');

   
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.value;

            if (value === 'C') {
                
                display.value = '';
            } else if (value === 'DEL') {
                
                display.value = display.value.slice(0, -1);
            } else if (value === '=') {
                try {
                    
                    display.value = eval(display.value);
                } catch (e) {
                    display.value = 'Error';
                }
            } else {
                
                display.value += value;
            }
        });
    });