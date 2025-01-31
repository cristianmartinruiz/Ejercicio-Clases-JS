var fruta = 'Melon';

function comer(){
    var fruta = 'Platano';
    
    function lavar(){
        console.log(`Estoy lavando ${window.fruta}`);
    }


lavar();
console.log(`He terminado con la ${fruta}`);
}

comer();