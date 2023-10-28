document.querySelector('.buttom').onclick = (event) => {
    if (txt.value === '' || txt1.value === '') {
        alert('Ошибка!!! Заполните поле');
        return;
    }
    
    location.href='firstpage.html?'+txt.value
}
