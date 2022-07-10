import React from "react";

const MonstersListItem = ({ monster, onMonsterClick }) => {

    const handleClick = function () {
        onMonsterClick(monster)
    }

    return (
        <>
            <li onClick={handleClick}>{monster.name}</li>
        </>
    )
}

export default MonstersListItem