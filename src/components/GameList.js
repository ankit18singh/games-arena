import * as React from 'react';
import { getGamesData } from '../utils/genralUtils';
import GameCard from './GameCard';
import { Row, Col, Grid, FormControl, PageHeader } from 'react-bootstrap';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class GameList extends React.Component {

    constructor() {
        super();
        this.state = {
            listOfGames: [],
            filteredList: [],
            sortBy: ''
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

    handleSort = (option) => {
        let sortedArray = []
        this.setState({sortBy: option})
        if (option.value === 'Ascending') {
            this.state.listOfGames.sort((a, b) => {
                if (a.score - b.score) {
                    console.log(a.score+":"+b.score)
                }
            })
        }
    }

    render() {
        return(
            <div>
                <div className="searchHeader row">
                    <FormControl type='text' style={formInput} onChange={this.search} className="col-sm-6 col-xs-12"/>
                    <div className="col-sm-6 col-xs-12">
                        <Select
                            onChange={this.handleSort}
                            value= {this.state.sortBy}
                            options={[
                                {value: 'Ascending', label: 'Ascending'},
                                {value: 'Descending', label: 'Descending'},
                            ]}
                            placeholder= 'Sort by Score'
                        />
                    </div>
                </div>
                {this.listGames()}
            </div>
        );
    }
}

const formInput = {
    width: '50%',
    margin: 'auto',
    borderRadius: '17px',
    display: 'inline-block'
}