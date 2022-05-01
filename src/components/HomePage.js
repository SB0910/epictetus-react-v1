import React from 'react';
import NavBar from './NavBar';

function HomePage(props) {
    return(
    <div className='homepage'>
        <NavBar props={props.navBar}/>
    </div>
    );
}

export default HomePage;
