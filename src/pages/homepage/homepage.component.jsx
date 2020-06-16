import React from 'react';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';
{/* This is a bad habit called prop drilling (adding history prop)*/}
{/* Because we are drilling these props multiple children deep in order to get them to the component that needs them.}
{/* The children inbetween do not need the history property for any reason. Other than to pass it to their children.*/}
const HomePage = ( {history} ) => (
    <div className='homepage'>
    <Directory history={history} />
    </div>
);

export default HomePage;