function guardar () {
    auth.collection("usuarios").add({
            correo: document.getElementById("email").value,
            clave: document.getElementById("pass").value,
        })
        .then((docRef) => {
            alert("registro exitoso");
        })
        .catch((error) => {
            alert("registro erróneo");
        });
}    