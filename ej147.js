const usuario = {nombreDeUsuario: 'batman2',
    contraseña : 'Alfred1960KPO!'};


function autenticarUsuario(usuario){
        if(usuario.nombreDeUsuario === 'batman' && usuario.contraseña=== 'Alfred1960KPO!'){
       return true; 
   }else{
       return false;
        }
   }
   
console.log(autenticarUsuario(usuario));