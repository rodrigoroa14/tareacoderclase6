const express = require('express')
const app = express()
const  {Productos} = require('./productos.js')

const PORT = process.env.PORT || 3001


app.get('/', (req, res) => {
    try {
        const productos = new Productos('./productos.txt')
        const listaProductos = productos.getProducts()
        .then(data=> res.status(200).send(data))
        .catch(err => console.log(err))
    } catch (error) {
        res.status(404).send({error: error})
    }    
})

app.get('/prodRandom', (req, res) => {
    try {
        const productos = new Productos('./productos.txt')
        const prodRandom = productos.getProductRandom()
        .then(data=> res.status(200).send(data))
        .catch(err => console.log(err))
    } catch (error) {
        res.status(404).send({error: error})
    }    
})



app.listen(PORT, () => {
    console.log(`Servidor corriendo en ${PORT}`)
})