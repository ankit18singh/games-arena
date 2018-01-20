import * as React from 'react';

const cardStyle = {
    padding: '10px',
    margin: '30px',
    height: '170px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
}
const headerStyle = {
    color: '#468ec2',
    fontWeight: 'bold',
    marginBottom: 0
}

export default class GameCard extends React.Component {
    card() {
        return (
            <div style={cardStyle}>
                <h4 style={headerStyle}> {this.props.data.title}</h4> <br/>
                Platform: {this.props.data.platform}<br/>
                Score: {this.props.data.score}<br/>
                Genre: {this.props.data.genre}<br/>
                Editor Choice: {this.props.data.editors_choice}
            </div>
        )
    }

    render() {
        return(
            this.card()
        );
    }
}