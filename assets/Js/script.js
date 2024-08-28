
// clase papá de todos los usuarios//
class Cuenta {
  constructor (email, password){
    this.email = email;
    this.password = password;
    }
  mostrarInfo(){
    return `Email: ${this.email}`;
  }

}

// clase hija de cuenta normal//
class CuentaNormal extends Cuenta {
  constructor(email,password){
    super(email, password);
    this.username = this.generarUsuarioAleatorio();
  }
  generarUsuarioAleatorio(){
    return 'user_' + Math.random().toString(36).substring(2,8);
  }

  mostrarInfo() {
    return `${super.mostrarInfo()}\nNombre de usuario: ${this.username}`;
  }
}


//Clase usuario  Vip

class CuentaVip extends Cuenta {
    constructor(username,email, password){
        super(email,password);
        this.username = username;
    }
    mostrarInfo (){
    return `${super.mostrarInfo()}\nNombre de usuario VIP : ${this.username}`;
    }
   
}


// Función para manejar el registro de cuenta normales 
function registrarCuentaNormal(){
  const email = document.getElementById('user-email').value;
  const password = document.getElementById('pass').value;

  const cuenta = new CuentaNormal(email,password);
  console.log(cuenta.mostrarInfo());
  alert('Cuenta normal registrada:\n' + cuenta.mostrarInfo());
}

function registrarCuentaVip() {
    const username = document.getElementById('user').value;
    const email = document.getElementById('user-email-vip').value;
    const password = document.getElementById('pass-vip').value;

    const cuenta = new CuentaVip(username, email, password);
    console.log(cuenta.mostrarInfo());
    alert('Cuenta VIP registrada:\n' + cuenta.mostrarInfo());
}

// Escuchando los botones de registro //
document.querySelector('.sign-in-htm .button').addEventListener('click', registrarCuentaNormal);
document.querySelector('.sign-up-htm .button-two').addEventListener('click', registrarCuentaVip);