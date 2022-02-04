import React from 'react'

import SeekerWidget from './ControlWidgets/SeekerWidget';
import SongControlWidget from './ControlWidgets/SongControlWidget';
import SongInfoWidget from './ControlWidgets/SongInfoWidget';
import VolumeControlWidget from './ControlWidgets/VolumeControlWidget';

interface Props {
    
}

const PlayerControlWidgets = (props: Props) => {
    return (
        <div className="flex flex-row justify-between w-full m-2">
            <SongInfoWidget />

            <div className="flex flex-col">
                <SongControlWidget />
                <SeekerWidget />
            </div>

            <VolumeControlWidget />
        </div>
    )
}

export default PlayerControlWidgets
