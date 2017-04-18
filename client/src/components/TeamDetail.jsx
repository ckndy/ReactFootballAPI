import React from 'react';

class TeamDetail extends React.Component {

  render() {
    if(!this.props.team) {
      return null;
    }

    return (
      <div>
      
      <h3>
      {this.props.team.name}
      </h3>

      <img src={this.props.team.crestUrl} />


      <h3>
      {this.props.player.name}
      </h3>

      </div>
      );
  }
}

export default TeamDetail;