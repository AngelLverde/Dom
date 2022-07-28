let  nombreUsuario = prompt ("ingresar nombre"); 
let  nombreIngresado = prompt ("Bienvenido a Cartagena Showrrom " +nombreUsuario+ " dejanos tu mail para recibir el newsletter " );

let products = [];
let total = 0;


function add(product,price) {
    console.log (product, price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`

}


function pagar() {
    alert(products.join(", \n"));
}