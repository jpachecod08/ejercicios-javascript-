
function autenticarUsuario(nombreDeUsuario,contraseña){
     if(nombreDeUsuario === 'batman' && contraseña=== 'Alfred1960KPO!'){
    return true; 
}else{
    return false;
     }
}

console.log(autenticarUsuario('batman','Alfred1960KPO!'));