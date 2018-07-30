import React from 'react';
import ChampionListItem from './champion_list_item';

const ChampionList = ({ championsData, onChampionClick }) => {

    const ChampionListItems = championsData.map((champion) => {
        return <ChampionListItem onChampionClick={onChampionClick} key={champion.key}
            champInfo={champion} />
    })

    return (
        <div className="row champion-list align-items-start text-center">
                {ChampionListItems}
        </div>
    )
}

export default ChampionList;