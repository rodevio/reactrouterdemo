import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
constructor() {
    super();

    this.state = {
    sections: [
        {
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1,
        linkUrl: 'hats'
        },
        {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2,
        linkUrl: ''
        },
        {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id: 3,
        linkUrl: ''
        },
        {
        title: 'womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4,
        linkUrl: ''
        },
        {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        id: 5,
        linkUrl: ''
        }
    ]
    };
}

render() {
    return (
    <div className='directory-menu'>
    {/* This is a bad habit called prop drilling (adding history prop)*/}
{/* Because we are drilling these props multiple children deep in order to get them to the component that needs them.}
{/* The children inbetween do not need the history property for any reason. Other than to pass it to their children.*/}
        {this.state.sections.map(({ id, title, imageUrl, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} history={this.props.history} />
        ))}
    </div>
    );
}
}

export default Directory;