import React, { Component } from 'react';
import '../App.css';
import ChampionCard from './champion_card';
import ChampionList from './champion_list';

const axios = require('axios');
const CHAMPIONS_DATA_URL = 'http://ddragon.leagueoflegends.com/cdn/8.14.1/data/en_US/champion.json';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentView: 'champion-list',
      currentChampionData: '',
      championsData: []
    }
  }
  
  componentDidMount() {
    axios.get(CHAMPIONS_DATA_URL)
    .then(response => {
      let championsData = [];
      for (let key in response.data.data) {

        championsData.push(response.data.data[key]);
      }
      
      // puts champions data object into state
      this.setState({championsData: championsData});
    })
    .catch(e => {
      console.log(e);
    })


  }

  handleChampionClick = (champInfo) => {
    let championUrl = `http://ddragon.leagueoflegends.com/cdn/8.14.1/data/en_US/champion/${champInfo.id}.json`
    
    axios.get(championUrl)
    .then(response => {
      this.setState({
        currentChampionData: response.data.data[champInfo.id],
        currentView: 'champion-card'
      })
    })
    
  }

  handleCardClickBack = () => {
    this.setState({
      currentView: 'champion-list',
      currentChampionData: ''
    })
  }


  render() {
    if (this.state.currentView === 'champion-card') {
      return (
        <ChampionCard onCardClickBack={this.handleCardClickBack} currentChampionData={this.state.currentChampionData}/>
      );
    }

    return (
      <div className="container">
        <div className="row add-margin-bottom15px">
          <div className="col">
            <h1>League of Legends Champion Viewer </h1>
          </div>
        </div>
        <ChampionList onChampionClick={this.handleChampionClick} championsData={this.state.championsData} />
      </div>
      
    );
  }
}

export default App;
