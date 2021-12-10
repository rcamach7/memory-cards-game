import "../styles/App.css";
import React from "react";
import GameField from "./GameField";
import title from "../images/title.png"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentScore: 0,
            highScore: 0,
        }
        this.handleScoreReporting = this.handleScoreReporting.bind(this);
    }

    handleScoreReporting(currentScoreIn) {
        this.setState({
            currentScore: currentScoreIn,
        })
        if (currentScoreIn > this.state.highScore) {
            this.setState({
                highScore: currentScoreIn,
            })
        }
    }

    render() {
        return (
            <div className="App">
                <WebsiteTitle/>
                <Scoreboard currentScore={this.state.currentScore} highScore={this.state.highScore}/>

                <GameField reportScore = {this.handleScoreReporting}/>
                <p className="copyright">Copyright © 2021 Ricardo Camacho Mireles</p>
            </div>
        );
    }
}

const WebsiteTitle = () => {
    return (
        <div className="WebsiteTitle">
            <img src={title} alt=""/>
        </div>
    )
}

const Scoreboard = (props) => {
    return (
        <div className="Scoreboard">
            <h3>Current Score: {props.currentScore} | High Score: {props.highScore}</h3>
        </div>
    )
}
export default App;