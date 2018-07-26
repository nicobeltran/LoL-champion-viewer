import React from 'react';

const ChampionAbilityText = ({ abilityInfo }) => {
    // console.log(abilityInfo);

    // no scaling
    if (abilityInfo.vars.length === 0) {
        return (
            <div className="row">
                <div className="col">
                    <h2>{abilityInfo.name}</h2>
                    <p>{abilityInfo.description}</p>
                </div>
            </div>
        )
    }

    else {
        const scaling = abilityInfo.vars.map((scale_value) => {
            return (
                <p key={scale_value.key}>Scales +{scale_value.coeff}% {scale_value.link.replace('spelldamage', 'AP')}</p>
            )
        })

        return (
            <div className="row">
                <div className="col">
                    <h2>{abilityInfo.name}</h2>
                    {scaling}
                    {abilityInfo.description}
                </div>
            </div>
        )

        //     let scalingText = '';

        //     for (let i = 0; i < abilityInfo.vars[0].coeff.length; i++) {

        //         scalingText += (Math.round(abilityInfo.vars[0].coeff[i] * 100))+"%";

        //         // add percentage and slash to separate per level scaling, except for last one
        //         if (i !== 4) {
        //             scalingText += " / ";
        //         }
        //     }

        //     return (
        //         <div className="row">
        //             <div className="col">
        //                 <h2>{abilityInfo.name}</h2>
        //                 <h4>Scaling: {scalingText}</h4>
        //                 <p>{abilityInfo.description}</p>
        //             </div>
        //         </div>
        //     );

        //     return (

        //         <div className="row">
        //             <div className="col">
        //                 <h2>{abilityInfo.name}</h2>
        //                 <p>Scaling: {Math.round(abilityInfo.vars[0].coeff * 100)}%</p>
        //                 <p>{abilityInfo.description}</p>
        //             </div>
        //         </div>
        //     );
        // }

    }
}

export default ChampionAbilityText;