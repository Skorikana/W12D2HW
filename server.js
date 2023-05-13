//Load Express
const express = require("express");
const Pokemon = require("./models/pokemon")

//Instantiate Express
const app = express();

//Other Variables
const port = 3000;

//Add dotenv
require('dotenv').config();

const mongoose = require('mongoose');
//Mongoose info
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
console.log('connected to mongo');
});

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
app.get("/" ,(req,res) =>{
    res.send("<h1>Welcome to Pokemon App</h1>")
})

app.get("/pokemon" ,(req,res) =>{
    //res.send(pokemon);
    //res.render("Index" ,{pokemon:pokemon})   
    Pokemon.find({}, (error, allPokemons)=>{
        res.render('Index', {
            pokemon: allPokemons
        });
    });
})

app.get("/pokemon/new" ,(req, res) =>{
    res.render("New");
})

app.post("/pokemon" ,(req,res)=>{
    Pokemon.create(req.body, (error, createdPokemon)=>{
        //res.send(createdPokemon);
        });
     res.redirect("/pokemon");
})

app.get('/pokemon/:id', (req, res) => {
    Pokemon.findById(req.params.id, (err, foundPokemon)=>{
    res.render("Show" ,{
    //pokemon:pokemon[req.params.id]
    Pokemon:foundPokemon
       })
    })
});


//Listen on the port
app.listen(port,() =>{
    console.log(`Listening on the ${port}`)
})