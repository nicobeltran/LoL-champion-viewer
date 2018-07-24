import React from 'react';

const ChampionCard = ({currentChampionData, onCardClickBack}) => {
    let champion = currentChampionData;
    if (!currentChampionData) {
        return (
            <div>Loading</div>
        )
    }


    const loadingSplashUrl = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`
    const stats = champion.stats;
    console.log(champion);

    const abilities = champion.spells.map((spell) => {
        return <div className="col-2" key={spell.id}><img src={`http://ddragon.leagueoflegends.com/cdn/8.13.1/img/spell/${spell.image.full}`} alt={spell.name + " pic"}/></div>
    })

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
                    <div className="row">
                        {abilities}
                    </div>
                    
                    <div onClick={() => onCardClickBack()}>
                        BACK
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChampionCard;