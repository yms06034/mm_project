function idLoginInput() {
    var inputField = document.getElementById('input-login-id');
    var errorMessageElement = document.getElementById('errorMessage-id');
    var submitButton = document.getElementById('login-button');

    var inputValue = inputField.value;
    var regex = /^(?=.*[a-zA-Z])[a-zA-Z0-9]*$/;

    if (!regex.test(inputValue)) {
        errorMessageElement.style.display = 'block';
        submitButton.disabled = true;
    } else {
        errorMessageElement.style.display = 'none';
        pwdLoginInput()
    }
}

function pwdLoginInput() {
    var inputField = document.getElementById('input-login-pwd');
    var errorMessageElement = document.getElementById('errorMessage-pwd');
    var submitButton = document.getElementById('login-button');

    var inputValue = inputField.value;
    var regex = /^.{4,}$/; 

    if (!inputValue || !regex.test(inputValue)) { // 비밀번호 값이 없거나 길이가 6에서 20 사이가 아닐 때
        errorMessageElement.style.display = 'block';
        submitButton.disabled = true;
    } else {
        errorMessageElement.style.display = 'none';
        submitButton.disabled = false;
    }
}

function regiidInput() {
    var inputField = document.getElementById('input-regi-id');
    var errorMessageElement = document.getElementById('errorMessage-id');

    var submitButton = document.getElementById('regi-button');

    var inputValue = inputField.value;
    var regex = /^[A-Za-z0-9]+$/;

    if (!regex.test(inputValue)) {
        errorMessageElement.style.display = 'block';
        submitButton.disabled = true;
    } else {
        errorMessageElement.style.display = 'none';
        regiButtonCheck()
    }
}

function regipwdInput() {
    var inputField = document.getElementById('input-regi-pwd');
    var errorMessageElement = document.getElementById('errorMessage-pwd');
    var errorMessageElement2 = document.getElementById('errorMessage-pwd2');
    var submitButton = document.getElementById('regi-button');

    var allowedCharacters = "!@#$%^*+=-";

    var inputValue = inputField.value;

    var regex = /^(?=.*[a-zA-Z])(?=.*\d).{4,}$/;

    for (let i = 0; i < inputValue.length; i++) {
        var character = inputValue[i];
        if (!(/[a-zA-Z0-9]/.test(character)) && allowedCharacters.indexOf(character) === -1) {
            errorMessageElement2.style.display = 'block';
            submitButton.disabled = true;
            return;
        }
    }

    errorMessageElement2.style.display = 'none';


    if (!regex.test(inputValue)) {
        errorMessageElement.style.display = 'block';
        submitButton.disabled = true;
    } else {
        errorMessageElement.style.display = 'none';
        regiButtonCheck()
    }

}

function regicheckpwd() {
    var inputField = document.getElementById('check-password');
    var checkField = document.getElementById('input-regi-pwd')
    var errorMessageElement = document.getElementById('errorMessage-chpwd');

    var inputValue = inputField.value;
    var checkValue = checkField.value;
    var submitButton = document.getElementById('regi-button');

    if (inputValue != checkValue) {
        errorMessageElement.style.display = 'block';
        submitButton.disabled = true;
        return;
    }

    errorMessageElement.style.display = 'none';
    regiButtonCheck()

}


function regiemailInput() {
    var inputField = document.getElementById('regi-email');
    var errorMessageElement = document.getElementById('errorMessage-email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var submitButton = document.getElementById('regi-button');

    var inputValue = inputField.value;
    if (!emailRegex.test(inputValue)) {
        errorMessageElement.style.display = 'block';
        submitButton.disabled = true;
    } else {
        errorMessageElement.style.display = 'none';
        regiButtonCheck()
    }
}


function regiButtonCheck() {
    var errorMessageElements = [
        document.getElementById('errorMessage-id'),
        document.getElementById('errorMessage-pwd'),
        document.getElementById('errorMessage-pwd2'),
        document.getElementById('errorMessage-chpwd'),
        document.getElementById('errorMessage-email')
    ];

    var submitButton = document.getElementById('regi-button');
    

    var allFieldsFilled = true;

    for (var i = 0; i < errorMessageElements.length; i++) {
        if (errorMessageElements[i].style.display === 'block') {
            allFieldsFilled = false;
            break;
        }
    }

    const checkbox = document.getElementById('agreement1');
    const checkbox2 = document.getElementById('agreement2');
    
    var submitButton = document.getElementById('regi-button');

    const is_checked = checkbox.checked;
    const is_checked2 = checkbox2.checked;

    if (!(is_checked && is_checked2)){
        allFieldsFilled = false;
    }
    submitButton.disabled = !allFieldsFilled;
}


function findid_emailInput() {
    var inputField = document.getElementById('email');
    var errorMessageElement = document.getElementById('errorMessage-email');
    const submitButton = document.getElementById('login-button');

    var inputValue = inputField.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(inputValue)) {
        errorMessageElement.style.display = 'block';
        submitButton.disabled = true;

    } else {
        errorMessageElement.style.display = 'none';
        submitButton.disabled = false;
    }
}

function findpwd_idInput(){
    var inputField = document.getElementById('input-id');
    var errorMessageElement = document.getElementById('errorMessage-id');
    const submitButton = document.getElementById('login-button');

    var inputValue = inputField.value;
    var regex = /^(?=.*[a-zA-Z])[a-zA-Z0-9]*$/;

    if (!regex.test(inputValue)) {
        errorMessageElement.style.display = 'block';
        submitButton.disabled = true;
    } else {
        errorMessageElement.style.display = 'none';
        findpwd()
    }
}

function findpwd_emailInput() {
    var inputField = document.getElementById('email');
    var errorMessageElement = document.getElementById('errorMessage-email');
    const submitButton = document.getElementById('login-button');

    var inputValue = inputField.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(inputValue)) {
        errorMessageElement.style.display = 'block';
        submitButton.disabled = true;

    } else {
        errorMessageElement.style.display = 'none';
        findpwd()
    }
}

function findpwd(){
    var errorMessageElements = [
        document.getElementById('errorMessage-id'),
        document.getElementById('errorMessage-email')
    ];

    const submitButton = document.getElementById('login-button');

    var allFieldsFilled = true;

    for (var i = 0; i < errorMessageElements.length; i++) {
        if (errorMessageElements[i].style.display === 'block') {
            allFieldsFilled = false;
            break;
        }
    }

    submitButton.disabled = !allFieldsFilled;
}

function pwdInput() {
    var inputField = document.getElementById('input-pwd');
    var errorMessageElement = document.getElementById('errorMessage-pwd');
    var errorMessageElement2 = document.getElementById('errorMessage-pwd2');

    var allowedCharacters = "!@#$%^*+=-"; 

    var inputValue = inputField.value;

    var regex = /^(?=.*[a-zA-Z])(?=.*\d).{8,20}$/;

    for (let i = 0; i < inputValue.length; i++) {
        var character = inputValue[i];
        if (!(/[a-zA-Z0-9]/.test(character)) && allowedCharacters.indexOf(character) === -1) {
            errorMessageElement2.style.display = 'block';
            return;
        }
    }

    errorMessageElement2.style.display = 'none';


    if (!regex.test(inputValue)) {
        errorMessageElement.style.display = 'block';
    } else {
        errorMessageElement.style.display = 'none';
    }

}

function checkpwd() {
    var inputField = document.getElementById('check-password');
    var checkField = document.getElementById('input-pwd')
    var errorMessageElement = document.getElementById('errorMessage-chpwd');

    var inputValue = inputField.value;
    var checkValue = checkField.value;

    if (inputValue != checkValue) {
        errorMessageElement.style.display = 'block';
        return;
    }

    errorMessageElement.style.display = 'none';
}


function emailInput() {
    var inputField = document.getElementById('email');
    var errorMessageElement = document.getElementById('errorMessage-email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var inputValue = inputField.value;
    if (!emailRegex.test(inputValue)) {
        errorMessageElement.style.display = 'block';
    } else {
        errorMessageElement.style.display = 'none';
    }
}