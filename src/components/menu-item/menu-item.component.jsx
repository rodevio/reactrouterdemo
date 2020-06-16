import React from 'react';

import './menu-item.styles.scss';
{/* This is a bad habit called prop drilling (adding history prop)*/}
{/* Because we are drilling these props multiple children deep in order to get them to the component that needs them.}
{/* The children inbetween do not need the history property for any reason. Other than to pass it to their children.*/}
const MenuItem = ({ title, imageUrl, size, history }) => (
<div className={`${size} menu-item`}>
    <div
    className='background-image'
    style={{
        backgroundImage: `url(${imageUrl})`
    }}
    />
    <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
    </div>
</div>
);

export default MenuItem;