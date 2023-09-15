$(function() {
    var usersList = $('.container');
    $.getJSON('usuarios.json', function(data) {
        var userListHTML = '<ul>';
        $.each(data, function(index, user) {
            userListHTML += '<li>Nombre: ' + user.name + '</li>';
            userListHTML += '<li>Correo Electr&oacute;nico: ' + user.email + '</li>';
            userListHTML += '<li>Pa&iacute;s: ' + user.city + '</li>';
            userListHTML += '<br>';
        });
        userListHTML += '</ul>';
        usersList.html(userListHTML);
    });
});
