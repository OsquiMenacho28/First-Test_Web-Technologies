$(function() {
    var registrationForm = $('[name="registrationForm"]');
    registrationForm.on('submit', function(event) {
        event.preventDefault();
        var userName = $('[name="userName"]').val();
        var userEmail = $('[name="userEmail"]').val();
        var userCountry = $('[name="userCountry"] option:selected').html();
        if (userName === '') {
            showMessage('Error', 'Ingrese su nombre por favor.', 'error');
        }
        else if (!/^.{3,}$/.test(userName)) {
            showMessage('Error', 'El nombre debe contener minimamente 3 caracteres.', 'error');
        }
        else if (userEmail === '') {
            showMessage('Error', 'Ingrese su correo electrónico por favor.', 'error');
        }
        else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(userEmail)) {
            showMessage('Error', 'El correo electrónico ingresado no es válido.', 'error');
        }
        else if (userCountry === 'Seleccione su País') {
            showMessage('Error', 'Seleccione su país por favor.', 'error');
        }
        else {
            showMessage(`¡Bienvenid@ ${userName}!`, 'Sus datos fueron registrados correctamente.', 'success');
            $('[name="userName"]').val('');
            $('[name="userEmail"]').val('');
            $('[name="userCountry"]').prop("selectedIndex", 0);
        }
    });
});

function showMessage(messageTitle, messageText, messageIcon) {
    Swal.fire({
        title: messageTitle,
        text: messageText,
        icon: messageIcon,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });
}