'use strict';

let form = document.querySelector('.form__container');
let emailInput = document.querySelector('.form__email-input');
let nameInput = document.querySelector('.form__name-input');
let surnameInput = document.querySelector('.form__surname-input');
let passwordInput = document.querySelector('.form__password-input');
let checkboxInput = document.querySelector('.form__checkbox-input');
let checkboxMark = document.querySelector('.form__checkbox-mark');
let labelEmailInput = document.querySelector('.form__label-email');
let labelPasswordInput = document.querySelector('.form__label-password');
let labelNameInput = document.querySelector('.form__label-name');
let labelSurnameInput = document.querySelector('.form__label-surname');
let starEmail = document.querySelector('.form__email');
let starPassword = document.querySelector('.form__password');
let starName = document.querySelector('.form__name');
let starSurname = document.querySelector('.form__surname');
let starCheckbox = document.querySelector('.form__checkbox');

let error1 = document.querySelector('.error1');
let error2 = document.querySelector('.error2');
let error3 = document.querySelector('.error3');
let error4 = document.querySelector('.error4');
let error5 = document.querySelector('.error5');
let error6 = document.querySelector('.error6');
let error7 = document.querySelector('.error7');


function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.onsubmit = function () {
    let emailValue = emailInput.value
    let passwordValue = passwordInput.value
    let nameValue = nameInput.value
    let surnameValue = surnameInput.value

    if (emailValue === '' && passwordValue === '' && nameValue === ''  && surnameValue === '') {
        error1.classList.add('error_block');
        error3.classList.add('error_block');
        error6.classList.add('error_block');
        error7.classList.add('error_block');
        emailInput.classList.add('form__error_border');
        passwordInput.classList.add('form__error_border');
        nameInput.classList.add('form__error_border');
        surnameInput.classList.add('form__error_border');

        labelEmailInput.classList.add('form__label_error');
        labelPasswordInput.classList.add('form__label_error');
        labelNameInput.classList.add('form__label_error');
        labelSurnameInput.classList.add('form__label_error');
        starEmail.classList.add('form__input_error');
        starPassword.classList.add('form__input_error');
        starName.classList.add('form__input_error');
        starSurname.classList.add('form__input_error');
    }
    if (emailValue === '') {
        error1.classList.add('error_block');
        emailInput.classList.add('form__error_border');
        labelEmailInput.classList.add('form__label_error');
        starEmail.classList.add('form__input_error');
    }
    if (passwordValue === '') {
        error3.classList.add('error_block');
        passwordInput.classList.add('form__error_border');
        labelPasswordInput.classList.add('form__label_error');
        starPassword.classList.add('form__input_error');
    }
    if (nameValue === '') {
        error6.classList.add('error_block');
        nameInput.classList.add('form__error_border');
        labelNameInput.classList.add('form__label_error');
        starName.classList.add('form__input_error');
    }
    if (surnameValue === '') {
        error7.classList.add('error_block');
        surnameInput.classList.add('form__error_border');
        labelSurnameInput.classList.add('form__label_error');
        starSurname.classList.add('form__input_error');
    } else {
        error1.classList.remove('error_block');
        error3.classList.remove('error_block');
        error6.classList.remove('error_block');
        error7.classList.remove('error_block');

        emailInput.classList.remove('form__error_border');
        passwordInput.classList.remove('form__error_border');
        nameInput.classList.remove('form__error_border');
        surnameInput.classList.remove('form__error_border');
        labelEmailInput.classList.remove('form__label_error');
        labelPasswordInput.classList.remove('form__label_error');
        labelNameInput.classList.remove('form__label_error');
        labelSurnameInput.classList.remove('form__label_error');
        starEmail.classList.remove('form__input_error');
        starPassword.classList.remove('form__input_error');
        starName.classList.remove('form__input_error');
        starSurname.classList.remove('form__input_error');
    }


    if (!checkboxInput.checked) {
        checkboxMark.classList.add('form__error_border');
        error5.classList.add('error_block');
        starCheckbox.classList.add('form__input_error');
        return false;
    } else {
        checkboxMark.classList.remove('form__error_border');
        error5.classList.remove('error_block');
        starCheckbox.classList.remove('form__input_error');
    }

    if (!validateEmail(emailValue)) {
        emailInput.classList.add('form__error_border');
        error2.classList.add('error_block');
        labelEmailInput.classList.add('form__label_error');
        starEmail.classList.add('form__input_error');
        return false;
    } else {
        emailInput.classList.remove('form__error_border');
        error2.classList.remove('error_block');
        labelEmailInput.classList.remove('form__label_error');
        starEmail.classList.remove('form__input_error');
    }


    if (passwordValue.length < 8) {
        error4.classList.add('error_block');
        labelPasswordInput.classList.add('form__label_error');
        starPassword.classList.add('form__input_error');
        passwordInput.classList.add('form__error_border');
        return false;
    } else {
        error4.classList.remove('error_block');
        labelPasswordInput.classList.remove('form__label_error');
        starPassword.classList.remove('form__input_error');
        passwordInput.classList.remove('form__error_border');
    }

    let user = {
        name: nameValue,
        surname: surnameValue,
        email: emailValue,
        password: passwordValue
    };
    console.log(user);
    return false;

}