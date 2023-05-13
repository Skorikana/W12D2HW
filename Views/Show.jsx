const React = require('react');

    class  Show extends React.Component {
      render() {
          const  {Pokemon} = this.props;
          return (
            <div>
            <h1>Gotta Catch 'Em All</h1>
            <ul>
            <li>
            <h2>Here goes our {Pokemon.name.charAt(0).toUpperCase()+Pokemon.name.slice(1)}</h2>
            {' '}
            <a href ={Pokemon.img} alt ='img'> </a> <br></br>
            {/* <img src ={pokemon.img + ".jpg"} alt =""></img>    Adding .jpg dynamically to the image to display */}
            <img src ={`http://img.pokemondb.net/artwork/${Pokemon.name}.jpg`} alt ={Pokemon.name}></img>
            <a href ="/pokemon">Go back</a>
            </li>
            </ul>
           </div>
          );
      }
    }
    module.exports = Show;