import React from 'react';
import ChampionAbilities from './champion_abilities';


const ChampionCard = ({currentChampionData, onCardClickBack}) => {
    let champion = currentChampionData;
    if (!currentChampionData) {
        return (
            <div>Loading</div>
        )
    }


    const loadingSplashUrl = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`
    const stats = champion.stats;
    const skins = champion.skins;
    // console.log(skins);
    return (
        <div className="container">
            <div className="row">
                <div className="col-4 text-center">
                    <img src={loadingSplashUrl} alt="champion splash" />
                </div>
                <div className="col-8">
                    <div><h1>{champion.name}</h1></div>
                    <div><h2>{champion.title.charAt(0).toUpperCase() + champion.title.slice(1)}</h2></div>

                    {/* Stats */}
                    <div>
                        Armor: {stats.armor}
                    </div>
                    <div>
                        Armor per Level: {stats.armorperlevel}
                    </div>
                    <div>
                        Attack Damage: {Math.round(stats.attackdamage)} - {Math.round(stats.attackdamageperlevel * 18 + stats.attackdamage)} ({stats.attackdamageperlevel} per level)
                    </div>
                    {/* <div className="row"> */}
                        <ChampionAbilities championData={champion}/>
                    {/* </div> */}
                    
                    <div onClick={() => onCardClickBack()}>
                        BACK
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChampionCard;