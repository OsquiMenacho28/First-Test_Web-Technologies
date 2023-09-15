$(function() {
    var userData = [];
    var userForm = $('[name="userForm"]');
    userForm.on('submit', function(event) {
        event.preventDefault();
        var userName = $('[name="userName"]').val();
        var userAge = $('[name="userAge"]').val();
        var userCity = $('[name="userCity"] option:selected').html();
        if (userName === '') {
            showMessage('Error', 'Ingrese su nombre por favor.', 'error');
        }
        else if (!/^[A-Za-z\s]+$/.test(userName)) {
            showMessage('Error', 'El nombre ingresado no es válido.', 'error');
        }
        else if (userAge === '') {
            showMessage('Error', 'Ingrese su edad por favor.', 'error');
        }
        else if (userAge > 100) {
            showMessage('Error', 'La edad ingresada no es válida.', 'error');
        }
        else if (userCity === 'Seleccione su Ciudad') {
            showMessage('Error', 'Seleccione su ciudad por favor.', 'error');
        }
        else {
            addUserData(userName, userAge, userCity);
            printTable();
            userForm[0].reset();
            Swal.fire({
                title: 'Datos registrados correctamente.',
                icon: 'success',
                showConfirmButton: false,
                timer: 1800
            });
        }
    });

    function addUserData(userName, userAge, userCity) {
        var newUser = {
            name: userName,
            age: userAge,
            city: userCity
        };
        userData.push(newUser);
    }
    
    function printTable() {
        var usersList = userData;
        var tbody = $('.table tbody');
        tbody.empty();
        usersList.forEach(function(user) {
            var row = $("<tr>");
            row.append($("<td>").text(user.name));
            row.append($("<td>").text(user.age));
            row.append($("<td>").text(user.city));
            tbody.append(row);
        });
    }

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
});