import * as React from 'react';

const cardStyle = {
    padding: '10px',
    margin: '30px',
    height: '170px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    textAlign: 'left'
}
const headerStyle = {
    color: '#468ec2',
    fontWeight: 'bold',
    marginBottom: 0,
    textAlign: 'center'
}

export default class GameCard extends React.Component {
    card() {
        return (
            <div style={cardStyle}>
                <h4 style={headerStyle} className= "page-heading"> {this.props.data.title}</h4> <br/>
                <div className="info">
                    <span>Platform: {this.props.data.platform}<br/></span>
                    <span>Genre: {this.props.data.genre}<br/></span>                
                    <span>Editor Choice: {this.props.data.editors_choice}</span>
                </div>
                <span className="score"><small>Score</small> <b>{this.props.data.score}</b><br/></span>
            </div>
        )
    }

    render() {
        return(
            this.card()
        );
    }
}