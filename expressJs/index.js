const express=require('express')
const app=express()
const port=3001



app.get('/',(req,res)=>{
    const person={
        id:1,
        name:"neslimanka"
    };
    res.send(person)
})


app.post('/',(req,res)=>{
  
    console.log(req)
    res.send(req.body)
 
})

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})