import React, { useState, useRef, useEffect } from 'react'

interface IMenuToggleMediatorProps {
    children?:  React.ReactNode;
    toggler:    JSX.Element;
    menu:       JSX.Element;
}

const MenuToggleMediator: React.FunctionComponent<IMenuToggleMediatorProps> = ({toggler, menu}) => {  
    const [menuState, setMenuState] = useState(false);
    const toggleHandler = () => setMenuState(!menuState)

    const handlerInjectedToggler = React.cloneElement(toggler, {clickHandler: toggleHandler});
    const handlerInjectedMenu = React.cloneElement(menu, {toggleHandler: toggleHandler}); 
    
    const mediatorRef = useRef<HTMLDivElement | null>(null);

    function outsideClickHandler(event: MouseEvent){
        if(mediatorRef.current && !mediatorRef.current.contains(event.target as HTMLDivElement)){
            setMenuState(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', outsideClickHandler);
        return () => document.removeEventListener('mousedown', outsideClickHandler);
    }, [mediatorRef]);

    return (
        <div ref={mediatorRef}>
            {handlerInjectedToggler}
            {menuState && handlerInjectedMenu}
        </div>
    )
}

export default MenuToggleMediator
