import React from 'react';
import BorderAccentSVG from "../img/NavigationBar/BorderAccent.svg";
import NavButtonGroup from './NavButtonGroup';
import PlayerControlWidgets from './PlayerControlWidgets';
import FloatingPlayerPreview from './FloatingPlayerPreview';

interface IPlayerbarProps{
    
}

const PlayerControllerBar: React.FunctionComponent<IPlayerbarProps> = ({}) => {
    return (
        <div>
            <div className="mx-2 sm:hidden ">
                <FloatingPlayerPreview />
            </div>
            <div className="z-10">
                <div className="flex flex-row justify-between ">
                    <img src={BorderAccentSVG} className="-scale-y-100" alt=""/>
                    <img src={BorderAccentSVG} className="-scale-x-100 -scale-y-100" alt=""/>
                </div>
                <div className="w-full bg-black h-20 flex flex-row items-center justify-center">

                    <div className="flex sm:hidden">
                        <NavButtonGroup />
                    </div>

                    <div className="hidden sm:flex w-full h-full">
                        <PlayerControlWidgets />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default PlayerControllerBar;