import React from 'react';
import TeamSelector from '../components/TeamSelector.jsx';
import TeamDetail from '../components/TeamDetail.jsx';

class TeamContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      teams: [],
      focusTeam: null
    };
  }

  componentDidMount() {
    const url = "http://api.football-data.org/v1/competitions/426/teams";
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.setRequestHeader("X-Auth-Token", "6be9d92146704edcab7842f097984a91");
    console.log(url);
    request.onload = () => {
      var teams = JSON.parse(request.responseText).teams;
      console.log(teams);
      this.setState({
        teams: teams,
        focusTeam: teams[0]
      });
    };

    request.send();
  }

  componentDidUpdate(prevProps, prevState) {
    var focusTeam = this.state.focusTeam;
    const url = focusTeam._links.players.href;
    if(url){
      const request = new XMLHttpRequest();
      request.open("GET", url);
      request.setRequestHeader("X-Auth-Token", "6be9d92146704edcab7842f097984a91");
      
      request.onload = () => {
        var players = JSON.parse(request.responseText).players;
        console.log(players);
        this.setState({
          players: players
        });
      };

      request.send(); 
    }
  }


  setFocusTeam(team){
    this.setState({
      focusTeam: team
    });
  }

  setFocusPlayer


  render(){
    return (
      <div>
      <h2>Team Container</h2>
      <TeamSelector teams={this.state.teams} selectTeam={
        this.setFocusTeam.bind(this) }/>
        <TeamDetail team={this.state.focusTeam} player={this.state.focusTeam} />
        </div>
        );
  }
}

export default TeamContainer;