const express= require('express')

const app =express()
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

app.get('/products',(req,res)=>{
    res.json([
        {id: 1, name:'Laptop', price:69999},
        {id:2, name:'Mouse', price: 500}
    ])
})


app.listen(3000, ()=>{
    console.log("The server is running on port 3000")
})