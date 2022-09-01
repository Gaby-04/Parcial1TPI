
const Inventario = [
    {
        id: 1,
        nombre: 'Camisa',
        precio: 10,
       cantidad: 2
    },
    {
        id: 2,
        nombre: 'Pantalon',
        precio: 30,
       cantidad: 2
    },
    {
        id: 3,
        nombre: 'Zapatos',
        precio: 40,
        cantidad: 2
    },
];

let carrito = [];



function aggProductoAlCarrito() {
    agregarCamisA = () =>{
        console.log(Inventario.push(1,"camisa",25,2));

        console.log(...Inventario);
   
        }

        agregarPantalon = () =>{
            console.log(Inventario.push(2,"Pantalon",10,2));
    
            console.log(...Inventario);
       
            }   

            agregarZapatos = () => {
                console.log(Inventario.push(3,"zapatos",25,2));
    
            console.log(...Inventario);


            }


}

const RealizarPago = (() =>{
 

let pago = document.querySelector(".pago");

mostrarDespedida = function(){
    
    alert(" total de productos")
    console.log("hola")

}
pago.addEventListener('click',mostrarDespedida , false)

})();

const ActualizarInventario = (() =>{


})();









