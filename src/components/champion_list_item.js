import React from 'react';

const ChampionListItem = ({champInfo, onChampionClick}) => {
    return (
        <div className="col-2 champion-column">
            <a className="champion-list-element" onClick={() => onChampionClick(champInfo)}>
            <img className="champion-square" src={`http://ddragon.leagueoflegends.com/cdn/8.14.1/img/champion/${champInfo.image.full}`}
            alt={champInfo.name + " picture"} />
            <p>{champInfo.name}</p>
            </a>
        </div>
    )
}

export default ChampionListItem;