class ProductManager{ 
    #products // con el hastag hago que sea privado
    constructor(){
        // this.counter = 0
        this.#products = []
    }

    getProducts = () =>{
        return this.#products
    }

    #generateId= () =>{
        return (this.#products.length === 0) ? 1 : this.#products[this.#products.length-1].id + 1
    }
    validateProduct = (title, description, price, thumbnail, code,  stock) =>{
        if (title=== undefined || description=== undefined || price=== undefined || thumbnail===undefined|| code=== undefined || stock=== undefined){
           console.log ('ERROR!! Faltan algunos de los campos!! ')    
           return false      
        }else{
            if(this.#products.find((product)=>product.code===code)){
                console.log('ERRORR!!! -> SE REPITE EL CODE DEL PRODUCTO')
                return false
            }else{
                return true
            }
        }
    }

    addProduct = (title, description, price, thumbnail, code, stock) =>{
        // id automatico
        if(this.validateProduct(title, description, price, thumbnail, code, stock)){
            this.#products.push({id: this.#generateId() , title, description, price, thumbnail, code, stock})
        }
    }
    getProductById = (id) =>  {
        const prod = this.#products.find((producto)=>producto.id===id)
        return (prod === undefined ? 'NOT FOUND' : prod )
    }  
}


// PROCESO DE TESTING CODER
const productos = new ProductManager()
console.log(productos.getProducts())
productos.addProduct('producto prueba','Este es un producto prueba',200,'Sin imagen','abc123',25)
console.log(productos.getProducts())
productos.addProduct('producto prueba','Este es un producto prueba',200,'Sin imagen','abc123',25)//producto repetido

console.log(productos.getProductById(9))//busco producto inexistente

console.log(productos.getProductById(1))//busco el que existe

// PROCESO DE TESTING PERSONAL
// productos.addProduct('Rutini','Vino malbec',2500,'url',5001,150)
// productos.addProduct('Saletein','Vino malbec',3000,'url',5001,200)
// productos.addProduct('Trumpeter','Vino malbec',2000,'url',5002)
// productos.addProduct('Norton DOC','Vino malbec',1900,'url',5003,150)

// console.log(productos.getProducts())

// const producto = productos.getProductById(9)
// console.log(producto)
