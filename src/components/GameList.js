import * as React from 'react';
import { getGamesData } from '../utils/genralUtils';
import GameCard from './GameCard';
import { Row, Col, Grid, FormControl, PageHeader } from 'react-bootstrap';

export default class GameList extends React.Component {

    constructor() {
        super();
        this.state = {
            listOfGames: [],
            filteredList: []
        };
    }

    componentWillMount(){
        this.getGame()        
    }

    async getGame() {
        const listOfGames = await getGamesData();
        this.setState({listOfGames: listOfGames, filteredList: listOfGames})
    }

    listGames() {
            return (
                  <div>
                    <Grid>
                        <Row>
                            {                           
                                this.state.filteredList.map((gameData, index) => {
                                   return (
                                    <Col sm={12} xs={4} md={4} key={index}>
                                        <GameCard data={gameData}/>                     
                                    </Col>
                                    )

                                })
                            }
                        </Row>
                     </Grid>    
                 </div>
             )        
    }

    search = (e) => {
        const inputValue = e.target.value
        console.log(inputValue.toUpperCase())
        let filteredArr = []
        this.state.listOfGames.map((data, index)=> {
            if (data.title.toUpperCase().indexOf(inputValue.toUpperCase()) > -1) {
                filteredArr.push(data)
            }
        })
        this.setState({filteredList: filteredArr})
    }

    render() {
        return(
            <div>
                <FormControl type='text' style={formInput} onChange={this.search}/>
                {this.listGames()}
            </div>
        );
    }
}

const formInput = {
    width: '50%',
    margin: 'auto',
    borderRadius: '17px'
}