import React from "react";
import "../styles/GameFieldAPI.css"

class GameFieldAPI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
            clickedPokemons: [],
        }
    }

    componentDidMount() {
        // As long as page isn't reloaded, we keep our same keys/pokemons
        let pokemonKeys = this.generateRandomKeys(10);
        for (let i = 0; i < pokemonKeys.length; i++) {
            let url = "https://pokeapi.co/api/v2/pokemon/" + pokemonKeys[i];
            fetch(url)
                .then(res => res.json())
                .then(
                    (result) => {
                        this.generatePokemon(result);
                    },
                    (error) => {
                        console.log(error);
                    }
                )
        }
    }

    clickedMe(name) {
        let indexOfPokemon = this.state.clickedPokemons.indexOf(name);
        // This will trigger if never clicked before.
        if (indexOfPokemon === -1) {
            const updatedClicked = this.state.clickedPokemons;
            updatedClicked.push(name);
            this.setState({
                clickedPokemons: updatedClicked,
            });
            this.props.reportScore(this.state.clickedPokemons.length);
        } else {
            alert("You have already clicked me! Game Reset");
            this.setState({
                clickedPokemons: [],
            })
            this.props.reportScore(0);
        }
        // Now We Must Shuffle The Pokemon!
        this.setState({
            pokemons: this.shuffleArray(this.state.pokemons),
        });
    }

    generatePokemon(pokemon) {
        const newPokemon = <Pokemon onClick={() => this.clickedMe(pokemon.name)}
                                    imageSource={pokemon.sprites.other['official-artwork'].front_default}
                                    name={pokemon.name} key={pokemon.id}/>

        let newCollection = this.state.pokemons;
        newCollection.push(newPokemon);
        this.setState({
            pokemons: newCollection,
        });
    }

    shuffleArray = (arrayIn) => {
        let array = arrayIn;
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    generateRandomKeys(numKeys) {
        let keys = [];
        for (let i = 0; i < numKeys; i++) {
            let key = Math.floor(Math.random() * 100);
            // Ensures we don't get repeated keys which means repeated pokemon
            while (keys.indexOf(key) !== -1) {
                key = Math.floor(Math.random() * 100);
            }
            keys.push(key);
        }
        return keys;
    }

    render() {
        return (
            <div className="GameFieldAPI">
                {this.state.pokemons}
            </div>
        );
    }
}

function Pokemon(props) {
    return (
        <div className="pokemon" onClick={props.onClick}>
            <p>{props.name.toUpperCase()}</p>
            <img src={props.imageSource} alt="pokemon"/>
        </div>
    )
}

export default GameFieldAPI;