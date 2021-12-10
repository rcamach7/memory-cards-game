import React from "react";
import "../styles/GameField.css"

class GameField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickedPokemon: [],
            pokemons: this.generatePokemon(),
        }
    }

    generatePokemon() {
        let defaultPokemons = ["Pickachu", "Charmander", "Tortoise", "Tito"];
        defaultPokemons = this.shuffleArray(defaultPokemons);

        let pokemonComponents = [];
        for (let i = 0; i < defaultPokemons.length; i++) {
            // This adds a new pokemon component to our new array, based on the shuffled default pokemons
            pokemonComponents.push(this.renderPokemon(defaultPokemons[i], i));
        }
        return pokemonComponents;
    }

    renderPokemon(name, key) {
        return (
            <Pokemon
                onClick={() => this.clickedMe(name)}
                name={name}
                key={key}
            >
            </Pokemon>
        )
    }

    clickedMe(name) {

        const indexOfPokemon = this.state.clickedPokemon.indexOf(name);
        if (indexOfPokemon === -1) {
            // True if never been clicked before
            const updatedClicked = this.state.clickedPokemon.slice();
            updatedClicked.push(name);
            this.setState({
                clickedPokemon: updatedClicked,
            })
        } else {
            alert("You have already clicked me! Game Reset");
            this.setState({
                clickedPokemon: [],
            })
        }

        // Randomize the order of pokemon after every click.
        this.setState({
            pokemons: this.generatePokemon(),
        })
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

    render() {
        return (
            <div className="GameField">
                {this.state.pokemons}
            </div>
        );
    }
}

const Pokemon = (props) => {
    return (
        <div className="pokemon" onClick={props.onClick}>
            {props.name}
        </div>
    )
}

export default GameField;