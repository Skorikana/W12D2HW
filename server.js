//Load Express
const express = require("express");
const pokemon = require("./models/pokemon")

//Instantiate Express
const app = express();

//Other Variables
const port = 3000;

//Middleware
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.use(express.urlencoded({extended:false}));

//View engines set
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

//Routes 
app.get("/" ,(re,res) =>{
    res.send("<h1>Welcome to Pokemon App</h1>")
})

app.get("/pokemon" ,(req,res) =>{
    //res.send(pokemon);
 res.render("Index" ,{pokemon:pokemon})   
})

app.get('/pokemon/:id', (req, res) => {
    res.render("Show" ,{
        pokemon:pokemon[req.params.id]
    })
});


//Listen on the port
app.listen(port,() =>{
    console.log(`Listening on the ${port}`)
})
