import React, { Component } from 'react'
import Team from './Team';
import './Home.css'
class Home extends Component {
    
    state = {
        teams: [
        ]
    }
    
    componentDidMount = (e) =>{
        fetch('https://statsapi.web.nhl.com/api/v1/teams')
        .then(res => res.json())
        .then(data => this.setState({
            teams: data.teams
        }));
    }
    render() {
        
        const teamList = this.state.teams.map(team =>{
            //console.log(team)
            return(
            /**<div key={team.id}>
            <h1>{team.name}</h1>
            <p>{team.venue.name}, {team.venue.city}</p>
            <button onClick={() =>this.getMoreInfo(team.franchise.link)}>More Info</button>
            </div>**/
            <Team key={team.id} name={team.name} venue={team.venue.name} city = {team.venue.city} link={team.link}/>
            )

        })
        return (
            <div className="app-container">
                <div className="teams-wrapper">{teamList}</div>
            </div>
        )
    }
}

export default Home
