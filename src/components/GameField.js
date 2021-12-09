import React from "react";
import "../styles/GameField.css"

class GameField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: [
                [<Pickachu trackClicked={this.clickedMe} keyId={1} key={1}/>, false],
                [<Charmander keyId={2} key={2}/>, false],
                [<Tortoise keyId={3} key={3}/>, false],
            ],
        }
    }

    clickedMe = (childKey) => {
        const curPokemonArray = this.state.pokemon;
        for (let i = 0; i < curPokemonArray.length; i++) {
            let curPokemon = curPokemonArray[i][0].key;
            if (curPokemon === childKey) {
                // Now we check if it has never been clicked on
                if (curPokemonArray[i][1] === false) {
                    this.setState({
                        pokemon: [i][1] = true,
                    })
                    console.log("+1 point")
                    console.log("currently false, now turned true");
                }
                console.log(curPokemonArray[i]);
            }
        }
    }

    // Performs a basic shuffle of our pokemon array.
    // shuffleArray = () => {
    //     let array = this.state.pokemon;
    //     for (let i = array.length - 1; i > 0; i--) {
    //         let j = Math.floor(Math.random() * (i + 1));
    //         let temp = array[i];
    //         array[i] = array[j];
    //         array[j] = temp;
    //     }
    //     return array;
    // }

    // componentDidMount() {
    //     this.setState({
    //         pokemon: this.shuffleArray(),
    //     })
    // }

    render() {
        return (
            <div className="GameField">
                {this.state.pokemon}
            </div>
        );
    }
}

const Pickachu = (props) => {

    const updateMyStatus = () => {
        props.trackClicked(props.keyId + "");
    }

    return (
        <div className="pickachu">
            Pickachu
            <button onClick={updateMyStatus}>
                Click me
            </button>
        </div>
    )
}

const Charmander = () => {
    return (
        <div className="charmander">
            Charmander
        </div>
    )
}

const Tortoise = () => {
    return (
        <div className="tortoise">
            Tortoise
        </div>
    )
}
export default GameField;