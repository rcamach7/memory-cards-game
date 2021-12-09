import React from "react";
import "../styles/GameField.css"

class GameField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: []
        }
    }

    clickedMe = (childKey) => {

    }

    shuffleArray = () => {
        let array = this.state.pokemon;
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
                {this.state.pokemon}
            </div>
        );
    }
}

const Pokemon = () => {
    return (
        <div className="pokemon">
        </div>
    )
}

export default GameField;