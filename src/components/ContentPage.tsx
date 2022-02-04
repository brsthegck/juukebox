import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';


interface IProp{
    from?:   string;
    test?:   string;
}
  
interface locType{
    pathname:           string;
    state:              {prevPath: string};
    key:                string;
}

const ContentPage: React.FC<IProp> = ({test}) => {
    // "h-full bg-red-600 w-full sm:w-content sm:bg-blue-100 justify-center"
    //TODO, Add padding enough for the floating player preview to breathe
    return (
        <div className="h-full w-full sm:w-content justify-center">
            {test}
        </div>
    );
}
  
export default ContentPage;