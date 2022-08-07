const fs = require('fs')

class Productos {
    constructor(ruta){
        this.ruta = ruta
    }

    async getProducts() {
      try {
        const allProducts = await fs.promises.readFile(this.ruta, 'utf-8')
        return JSON.parse(allProducts)
      } catch (error) {
          console.log(error)
      }
        
    }

    async getProductRandom() {
      let products = await this.getProducts()
      let randomProduct = Math.floor(Math.random()*products.length)
      return products[randomProduct]
    }
}

// let prod = new Productos('./productos.txt')
// prod.getProducts().then(data => console.log(data)).catch(err=>console.log(err))
// prod.getProductRandom().then(data => console.log(data)).catch(err => console.log(err))


module.exports = {Productos}