// let nombreIngresado = prompt ("ingresa tu nombre");
// let ingresarMail = prompt ("Bienvenido a Cartagena "+nombreIngresado+" dejanos tu mail para recibir el newsletter");
  
// If ternario , nos indica que va a ocurrir en caso de cumplir o no con el requisito de ingreso// 
let edad = 15;
let login = "esta logueado";

(edad >= 15 ) && (login == "esta logueado")? console.log ("puede inresar al sitio") : console.log ("No puede ingresar al sitio");



//--------- guardar en localStorage------------//
const elementosCarrito = JSON.parse (localStorage.getItem("products")) ||[];


// const totalCompra = products.reduce ((acumulador,product)=> acumulador + product.price, 0);

// const totalCarrito = localStorage.getItem("totalCarrito");
// document.getElementById("checkout").innerHTML = totalCarrito;



let products = elementosCarrito;
let total = 0;


function add(product,price) {
    console.log (product, price);
    products.push(product);
    document.getElementById("checkout").innerHTML = products.length;
    console.log (products);

// localStorage.setItem("totalCarrito", products.length);

localStorage.setItem ("products", JSON.stringify(products));

    total = total + price;
    document.getElementById("checkout").innerHTML = `Pagar  $${total}`


}


function pagar() {
    alert(products.join(", \n"));
    console.log ("el usuario hizo click en pagar");

}


// Agrego Evento//
const clickPagar = (event)=> {
    console.log (event);

}


const usuarioPagar = document.getElementById("checkout");


usuarioPagar.addEventListener("click" , clickPagar);



// usuarioPagar.removeEventListener("click" , clickPagar);



