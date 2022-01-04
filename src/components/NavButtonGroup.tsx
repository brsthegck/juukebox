import React from 'react'
import IconButton from './IconButton';
import HomeSVG from '../img/NavigationBar/Home.svg';
import LibrarySVG from '../img/NavigationBar/Library.svg';
import SearchSVG from  '../img/NavigationBar/Search.svg';

interface Props {
    
}

const NavButtonGroup = (props: Props) => {
    return (
        <div className="flex flex-row justify-center">
            <IconButton icon={HomeSVG} route="home" isNavButton responsive>Home</IconButton>
            <IconButton icon={LibrarySVG} route="library" isNavButton responsive>Library</IconButton>
            <IconButton icon={SearchSVG} route="search" isNavButton responsive>Search</IconButton>
        </div>
    )
}

export default NavButtonGroup
