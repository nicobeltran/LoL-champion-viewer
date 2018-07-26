import React from 'react';

const ChampionAbilitiesImages = (props) => {

    // take props from ChampionAbilities for current champion's spells and map it into individual columns with images
    console.log(props.currentAbility);
    const abilityImages = props.abilities.map((spell, index) => {
        if (spell === props.currentAbility) {
            return (
                <div className="col-2" key={spell.id}>
                    <img onClick={() => props.onAbilityClick(index)}
                        src={`http://ddragon.leagueoflegends.com/cdn/8.14.1/img/spell/${spell.image.full}`}
                        alt={spell.name + " pic"} 
                        className="active-ability"/>
                </div>
            )
        }

        return (



            <div className="col-2"
                key={spell.id}><img onClick={() => props.onAbilityClick(index)}
                    src={`http://ddragon.leagueoflegends.com/cdn/8.14.1/img/spell/${spell.image.full}`}
                    alt={spell.name + " pic"} />
            </div>
        );
    })

    // return a bootstrap row containing a column for each spell
    return (
        <div className="row">
            {abilityImages}
        </div>
    )
}

export default ChampionAbilitiesImages;