import * as React from 'react';
import GameList from './GameList';

const heading = {
    color: '#468ec2',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold'
}

export default class BasePage extends React.Component {
    render () {
        return(
            <div>
                <h1 style={heading}>Games Arena</h1>
                <GameList />
            </div>
        );
    }
}