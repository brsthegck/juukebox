import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import ContentIndexMap from '../ContentIndexMap';
import '../styles/PageShiftAnims.css';

interface IProp{
    from?:   string;
}
  
interface locType{
pathname:           string;
state:              {prevPath: string};
key:                string;
}

const ContentPage: React.FC<IProp> = ({}) => {
    const location = useLocation() as locType;

    let currentRoute = location.pathname;
    let from = null; 

    if(location.state){
        from = location.state.prevPath;
    }

    if(from){
        const delta = ContentIndexMap[currentRoute] - ContentIndexMap[from];

        if(delta < 0){
        console.log("TO LEFT");
        }
        else if(delta > 0){
        console.log("TO RIGHT");
        }
        else{
        console.log("TO UP");
        }
    }

    return (
        <div className="w-full h-full flex justify-center items-center">
            <p>Test</p>
        </div>
    );
}
  
export default ContentPage;