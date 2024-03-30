const prześlij = () => { 
    const firstNameInput = document.getElementById("imie").value;
    const lastNameInput = document.getElementById("nazwisko").value;
    const dataInput = document.getElementById("data").value;
    const cityInput = document.getElementById("city").value;
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;
    const messageInput = document.getElementById("wiadomosc").value;

    if(/^[A-Z][a-zA-Z0-9]{1,19}$/.test(firstNameInput)){
        document.getElementById("imie").innerHTML = firstNameInput;
    } else{
        (window.alert('Imie musi mieć 1szą dużą litere'));
        document.getElementById('imie').style.border = '2px solid red'
    }

    if(/^[A-Z][a-zA-Z0-9]{1,19}$/.test(lastNameInput)){
        document.getElementById("lastNameOutput").innerHTML = lastNameInput;
    } else{
        (window.alert('Nazwisko musi mieć 1szą dużą litere'));
        document.getElementById('nazwisko').style.border = '2px solid red'
    }

    if(!dataInput) {
        document.getElementById('data').style.border = '2px solid red'
        window.alert('Nie podano daty')
    } else{
        document.getElementById("dataOutput").innerHTML = dataInput;
    }

    if(!cityInput) {
        document.getElementById('city').style.border = '2px solid red'
        window.alert('Nie podano miejsca zamieszkania')
    } else{
        document.getElementById("dataOutput").innerHTML = dataInput;
    }


    if (emailInput.includes('@')) {
        window.alert("Pomyśny email")
        document.getElementById("cityOutput").innerHTML = cityInput;
        document.getElementById("emailOutput").innerHTML = emailInput;
        document.getElementById("messageOutput").innerHTML = messageInput;
    }
    else {
        (window.alert('Email nie zawiera @'));
        document.getElementById('email').style.border = '2px solid red'

    }


    if(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(passwordInput)){
        document.getElementById("passwordOutput").innerHTML = passwordInput;
    } else{
        (window.alert('Hasło musi mieć 8 znaków conajmniej 1 dużą literei i 1cyfre'));
        document.getElementById('password').style.border = '2px solid red'
    }

}