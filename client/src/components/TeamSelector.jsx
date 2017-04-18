import React from 'react';

class TeamSelector extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: undefined
    };
  }

  handleChange(event) {
    var newIndex = event.target.value;
    this.setState({
      selectedIndex: newIndex
    });

    var selectedTeam = this.props.teams[newIndex];
    this.props.selectTeam(selectedTeam);
  }

  render() {
    var options = this.props.teams.map((team, index) => {
      return <option value={index} key={index}>{team.name}</option>
    });

    return (
      <select id="teams"
      value={this.state.selectedIndex}
      onChange={(event) => {this.handleChange(event) }} >

      {options}

      </select>
      );
  }
}
  export default TeamSelector;
