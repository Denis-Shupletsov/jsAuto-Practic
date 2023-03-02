const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
]

const option = colorPickerOptions[0];

const buttonEl = document.createElement('button');
buttonEl.type = 'button';
buttonEl.textContent = option.label;
buttonEl.style.backgroundColor = option.color;

// document.body.appendChild(buttonEl);
console.log(buttonEl);

