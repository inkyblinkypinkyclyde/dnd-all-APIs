import React from "react";

const MonstersDetail = ({ selectedMonster }) => {

    return (
        <>
            <h1>{selectedMonster.name}</h1>
            <h3>Size: {selectedMonster.size}</h3>
            <h3>Armor Classe: {selectedMonster.armor_class}</h3>
            <h3>Type: {selectedMonster.type}</h3>
            <h3>Hit Points: {selectedMonster.hit_points}</h3>
            <h3>Alignment: {selectedMonster.alignment}</h3>
        </>
    )
}

export default MonstersDetail