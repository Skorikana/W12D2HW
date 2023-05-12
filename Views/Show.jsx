const React = require('react');

    class  Show extends React.Component {
      render() {
          const  {pokemon} = this.props;
          return (
            <div>
            <h1>Gotta Catch 'Em All</h1>
            <ul>
            <li>
            <h2>Here goes our {pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</h2>
            {' '}
            <a href ={pokemon.img} alt ='img'> </a> <br></br>
            <img src ={pokemon.img + ".jpg"} alt =""></img>    {/* Adding .jpg dynamically to the image to display */}
            <a href ="/pokemon">Go back</a>
            </li>
            </ul>
           </div>
          );
      }
    }
    module.exports = Show;