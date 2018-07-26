import React, { Component } from 'react';
import ChampionAbilitiesImages from './champion_abilities_images';
import ChampionAbilityText from './champion_ability_text';

class ChampionAbilities extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentSelectedAbility: this.props.championData.spells[0]
        }

    }

    handleAbilityClick = (index) => {

        this.setState({
            currentSelectedAbility: this.props.championData.spells[index]
        })

    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <ChampionAbilitiesImages onAbilityClick={this.handleAbilityClick} 
                    currentAbility={this.state.currentSelectedAbility}
                    abilities={this.props.championData.spells} />
                    <ChampionAbilityText abilityInfo={this.state.currentSelectedAbility}/>
                </div>

            </div>
        )
    }

}

export default ChampionAbilities;
