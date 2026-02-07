const cors =require('cors')

const express= require('express')
const productsRouter = require('./products')

const app =express()

app.use(cors({
    origin:['http://localhost:5500','http://127.0.0.1:5500']
}))

app.use((req, res, next) =>{
    console.log(req.method, req.path)
    next()
})

app.use(express.json())

app.use('/products', productsRouter)
//get route sending information to frontend
app.get('/', (req,res) => {
    res.send('hellow from express')
})

app.get('/about',(req,res)=>{
    res.send('This is about page')
})

app.get('/contact',(req,res) =>{
    res.send('In this page you get contact information')
})



app.get('/message', (req,res)=>{
    res.json({message: "This message from backend"})
})

app.post('/message', (req,res) =>{
    const {name, message} = req.body

    console.log('New message:' , name, message)
    res.json({message: 'Thank you for your message'})
})

app.listen(3000, ()=>{
    console.log("The server is running on port 3000")
})