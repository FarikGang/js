const express = require("express")
const bodyParser = require("body-parser")
const app = express();
const pageContacts = require("./sait/about")
const pageContacts1 = require("./sait/menu")
const pageContacts2 = require("./sait/shop")
const pageContacts3 = require("./sait/contact")
app.use(bodyParser.urlencoded({extended:false}))
app.get('/about', (request,response)=>{
    console.log(request.headers)
    const student = {
        name:"name",
        group: "group",
        birthday:"21.12.2000"
    }
    response.send(pageContacts)
    response.json(student)
})
app.get('/contact', (request,response)=>{
    console.log(request.headers)
    const student = {
        name:"name",
        group: "group",
        birthday:"21.12.2000"
    }
    response.send(pageContacts1)
    response.json(student)
})
app.get('/menu', (request,response)=>{
    console.log(request.headers)
    const student = {
        name:"name",
        group: "group",
        birthday:"21.12.2000"
    }
    response.send(pageContacts2)
    response.json(student)
})
app.get('/shop', (request,response)=>{
    console.log(request.headers)
    const student = {
        name:"name",
        group: "group",
        birthday:"21.12.2000"
    }
    response.send(pageContacts3)
    response.json(student)
})



app.listen(8000,()=>{
    console.log("8000 port")
})