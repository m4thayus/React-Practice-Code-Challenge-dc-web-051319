import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

    state = {
        sushi: [],
        plates: [],
        emptyPlates: [],
        conveyorIndex: 0,
        sushiWallet: 100
    }

    getAllSushi = () => {
        fetch(API)
            .then(response => response.json())
            .then(sushi => {
                this.setState(
                    {
                        sushi: sushi
                    },
                    () => {
                        this.fillPlates()
                    }
                )
            });
    }

    fillPlates = () => {
        let conveyorStart = this.state.conveyorIndex
        let conveyorEnd = this.state.conveyorIndex + 4
        let plates = this.state.sushi.slice(conveyorStart, conveyorEnd)
        plates.forEach(plate => {
            plate.eaten = false
        })
        this.setState({
            plates: plates,
            conveyorIndex: conveyorEnd
        })
    }

    eatSushi = (sushi) => {
        if (this.state.sushiWallet - sushi.price > 0) {
            sushi.eaten = true
            this.state.emptyPlates.push(sushi)
            this.setState({
                plates: this.state.plates.filter(plate => plate !== sushi),
                emptyPlates: this.state.emptyPlates,
                sushiWallet: this.state.sushiWallet - sushi.price
            })
        } else {null}
    }

    componentDidMount() {
        this.getAllSushi()
    }

    render() {
        return (
            <div className="app">
                <SushiContainer plates={this.state.plates} fillPlates={this.fillPlates} eatSushi={this.eatSushi} />
                <Table emptyPlates={this.state.emptyPlates} sushiWallet={this.state.sushiWallet} />
            </div>
        );
    }
}

export default App;