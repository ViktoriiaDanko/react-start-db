import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './item-list.css';

export default class ItemList extends Component {

    SwapiService = new SwapiService();

    state = {
        peopleList: null
    };

    componentDidMount() {
        this.SwapiService
            .getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList
                })
            })
            .catch()
    }

    renderItems(arr) {
        return arr.map((person, id) => {
            return (
                <li className='list-group-item' 
                    key={id}
                    onClick={() => this.props.onItemSelected(id)} >
                    {person.name}
                </li>
            )
        })
    }


    render() {

        const { peopleList } = this.state;

        if(!peopleList) {
            return <Spinner />
        }

        const items = this.renderItems(peopleList);

        return(
            <ul className="item-list list-group">
                {items}
            </ul>
        )
    }
}
