const cors = require('cors')
const express = require('express')

const app = express()

// middleware
app.use(cors({
    origin: ['http://localhost:5500', 'http://127.0.0.1:5500']
}))
app.use(express.json())

// fake database
const products = [
    { id: 1, name: 'Laptop', price: 1299 },
    { id: 2, name: 'Mouse', price: 50 }
]

// routes
app.get('/', (req, res) => {
    res.send('Hello from Express')
})

app.get('/about', (req, res) => {
    res.send('This is the about page')
})

app.get('/contact', (req, res) => {
    res.send('This is the contact page')
})

app.get('/products', (req, res) => {
    res.json(products)
})

app.get('/products/:id', (req, res) => {
    const id = Number(req.params.id)
    const requestedProduct = products.find(p => p.id === id)

    if (!requestedProduct) {
        return res.status(404).json({ error: "Product not found" })
    }

    res.json(requestedProduct)
})

app.get('/message', (req, res) => {
    res.json({ message: "Hello from your express back-end 🚀" })
})

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000')
})
