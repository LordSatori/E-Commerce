// Focus Button
const focusBtns = document.querySelectorAll('.focus');

focusBtns.forEach(focusBtn => {
    focusBtn.addEventListener('click', () => {
        document.querySelector('.btn-stick')?.classList.remove('btn-stick');
        focusBtn.classList.add('btn-stick');
    }); 
});

// Count Clicker
const addVal = document.querySelector('.sum');
const deductVal = document.querySelector('.sub');
const showVal = document.querySelector('.val');

let currentAmount = 1;

addVal.addEventListener('click', () => {
    currentAmount++
    showVal.innerHTML = currentAmount
})

deductVal.addEventListener('click', () => {
    if(currentAmount <= 1){
        alert("Your cart is empty")
    } else {
        currentAmount--
    }
    showVal.innerHTML = currentAmount;
})
