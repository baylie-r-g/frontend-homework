const elem = document.querySelector('input');

elem.addEventListener('input', handleInput);

function handleInput() {
    const val= document.getElementById('entry').value;
    if (isNaN(val)){
        document.getElementById('alert').textContent='You must enter a number';
        document.getElementById('alert').style.color = 'red';
        return;
    }
    else if (Number(val) < 0) {
        document.getElementById('alert').textContent='Your number must be positive';
        document.getElementById('alert').style.color = 'red';
        return;
    }
    const valstr = val.toString();
    const revstr = [...valstr].reverse().join('');
    if (valstr === revstr) {
        document.getElementById('alert').textContent ='Yes. This is a palindrome!';
        document.getElementById('alert').style.color = 'green';
        return;
    }
    else if (valstr !== revstr) {
        document.getElementById('alert').textContent='No. Try again.';
        document.getElementById('alert').style.color = 'red';
        return;
    }
    return;
}
