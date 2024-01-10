const socket = io()

let user

Swal.fire({
    title: 'Login',
    input: 'text',
    text: 'Ingrese su usuario de chat:',
    inputValidator: value => {
        return !value && 'Ingrese un nombre de usuario valido continuar'
    },
    allowOutsideClick: false,
}).then(
    result => {
        user = result.value
        console.log(user);        
    }
)