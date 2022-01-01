import React, {useEffect, useRef} from 'react'
import classNames from 'classnames'

interface IMenuContainerProps {
    children:     React.ReactNode;
    className?:     string;
    toggleHandler?:  () => void;
}

const MenuContainer: React.FunctionComponent<IMenuContainerProps> = ({children, className, toggleHandler}) => {
    //inject all elements clickhandlers togglehandler prop
   
    const handlerInjectedChildren = React.Children.map(children, child => {
        if(React.isValidElement(child)){
            return React.cloneElement(child, {clickHandler: () => {
                child.props.clickHandler && child.props.clickHandler();
                toggleHandler && toggleHandler();
            }});
        }
    });

    return (
        <div className={classNames(
                'text-slate-200 text-xs rounded-lg px-2 py-2 bg-zinc-800 min-w-menu drop-shadow-lg',
                className)}>
            <ul>
                {handlerInjectedChildren}
            </ul>
        </div>
    )
}

export default MenuContainer
