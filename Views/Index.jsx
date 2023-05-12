const React = require('react');

const myStyle = {
    color: 'black',
    backgroundColor: 'lightblue',
    };

    class  Index extends React.Component {
      render() {
          const { pokemon } = this.props;
          return (
            <div style ={myStyle}>
            <h1>See All the Pokemon</h1>
            <ul>
            {pokemon.map((pokemon, i) => {
            return (
            <li>
            {' '}
            <a href={`/pokemon/${i}`}>            
             {pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}  
            </a>{' '}
            </li>
            );
            })}
            </ul>
            </div>
          );
      }
    }
    module.exports = Index;