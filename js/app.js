var provider = new firebase.auth.GoogleAuthProvider();
$('#login').click(function() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
        console.log(result.user)
        guardaDatos(result.user)
        var image = result.user.photoURL
        var saludo = 'Hola ' + result.user.displayName
        var $foto = $('<img />')
        $foto.attr('src', image)
        $('#login').hide();
        $('#root').append(saludo)
        $('#root').append($foto)
    })
})
function guardaDatos(user) {
    var usuario = {
        uid: user.uid,
        nombre: user.displayName,
        email: user.email,
        foto: user.photoURL
    }
    firebase.database().ref("usuarios/" + user.uid).set(usuario)
}
/*function mostrarDatos() {
    firebase.database().red("usuarios").get()
}*/