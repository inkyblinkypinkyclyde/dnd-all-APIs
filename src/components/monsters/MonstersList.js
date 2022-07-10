import React from "react";
import MonstersListItem from "./MonstersListItem";

const MonstersList = ({ monsters, onMonsterClick }) => {
    console.log(monsters)
    const monstersItems = monsters.map((monster, index) => {
        return (
            <MonstersListItem
                monster={monster}
                key={index}
                onMonsterClick={onMonsterClick}
            />
        )
    })

    return (
        <>
            <ul>
                {monstersItems}
            </ul>
        </>
    )
}

export default MonstersList