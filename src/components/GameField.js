import React from "react";
import "../styles/GameField.css"

class GameField extends React.Component {
    render() {
        return (
            <div className="GameField">
                <Pickachu/>
                <Charmander/>
                <Tortoise/>
            </div>
        );
    }
}

export default GameField;

const Pickachu = () => {
    return (
        <div className="pickachu">
            Pickachu
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