let input = document.getElementById('input');
let result = document.getElementById('result');
let inputArr = [];
let value = '';
let res = 0;

function number(a){
    inputArr.push(a);
    value = value + a;
    input.innerHTML = `<div class="test" id="input">${value}</div>`
}

function plus(a){
    inputArr.push('+');
    result.innerHTML = `<div class="test" id="input">${inputArr.join('')}</div>`
    input.innerHTML = `<div class="test" id="input">0</div>`;
    value = '';
}

function minus(a){
    inputArr.push('-');
    result.innerHTML = `<div class="test" id="input">${inputArr.join('')}</div>`
    input.innerHTML = `<div class="test" id="input">0</div>`;
    value = '';
}

function multiplication(a){
    inputArr.push('*');
    result.innerHTML = `<div class="test" id="input">${inputArr.join('')}</div>`
    input.innerHTML = `<div class="test" id="input">0</div>`;
    value = '';
}

function division(a){
    inputArr.push('/');
    result.innerHTML = `<div class="test" id="input">${inputArr.join('')}</div>`
    input.innerHTML = `<div class="test" id="input">0</div>`;
    value = '';
}

function percent(a){
    let b = inputArr.join('') / 100
    result.innerHTML = `<div class="test" id="input">${b}</div>`
    input.innerHTML = `<div class="test" id="input">0</div>`;
    value = '';
    inputArr = [b];
}

function radical(a){
    let b = Math.sqrt(+inputArr.join(''));
    result.innerHTML = `<div class="test" id="input">${b}</div>`
    input.innerHTML = `<div class="test" id="input">0</div>`;
    value = '';
    inputArr = [b];
}

function argument(a){
    inputArr.unshift('-');
    value = -1 * value;
    input.innerHTML = `<div class="test" id="input">${value}</div>`;
    inputArr = [value];
}

function reset(a){
    inputArr.pop();
    value = inputArr.join('');
    input.innerHTML = `<div class="test" id="input">${value}</div>`;
}

function cl(a){
    result.innerHTML = `<div class="test" id="input">0</div>`;
    input.innerHTML = `<div class="test" id="input">0</div>`;
    value = '';
    inputArr = [];
}

function equal(a){
    res = eval(inputArr.join(''));
    result.innerHTML = `<div class="test" id="input">${res}</div>`;
    input.innerHTML = `<div class="test" id="input">0</div>`;
    inputArr = [res];
}

