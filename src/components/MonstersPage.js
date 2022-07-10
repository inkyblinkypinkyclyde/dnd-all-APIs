import React from 'react'
import MonstersDetail from './monsters/MonstersDetail'
import MonstersList from './monsters/MonstersList'

const MonstersPage = ({ monsters, selectedMonster, onMonsterClick }) => {
    return (
        <>
            <MonstersList
                monsters={monsters}
                onMonsterClick={onMonsterClick}
            />
            {selectedMonster ? <MonstersDetail selectedMonster={selectedMonster} /> : null}
        </>
    )
}

export default MonstersPage