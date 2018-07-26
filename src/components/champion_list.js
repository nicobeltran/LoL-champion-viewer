import React from 'react';
import ChampionListItem from './champion_list_item';

const ChampionList = ({championsData, onChampionClick}) => {
    
    const ChampionListItems = championsData.map((champion) => {
        return <ChampionListItem onChampionClick={onChampionClick} key={champion.key} 
        champInfo={champion} />
    })
    
    return (
        <div className="container champion-list text-center">
            <div className='row'>
                {ChampionListItems}
            </div>
        </div>
    )
}

export default ChampionList;