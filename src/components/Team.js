import React from 'react'
class Team extends React.Component{
    state = {
        firstYear: '',
        teamSite: ''
    }

    getMoreInfo = (e) =>{
        let query = e;
        fetch('https://statsapi.web.nhl.com'+query)
        .then(res => res.json())
        .then(data => this.setState({
            firstYear: 'First Year of Play: '+data.teams[0].firstYearOfPlay,
            teamSite: <a href={data.teams[0].officialSiteUrl}>Team Site</a>
        }))
        //console.log('https://statsapi.web.nhl.com'+query);
    }
    render(){
    return (
        <div className="team">
            <h3>{this.props.name}</h3>
            <p>{this.props.venue}, {this.props.city}</p>
            <p>{this.state.firstYear}</p>
            <p>{this.state.teamSite}</p>
            <button onClick={ () =>this.getMoreInfo(this.props.link)}>More Info</button>
            
        </div>
    )
    }
}

export default Team
