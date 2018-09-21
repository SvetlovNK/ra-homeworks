'use strict';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 'All',
      projects: props.projects
    }
  }

  selectFilter = (filter) => {
    const filtredProjects = filter === 'All' ?
      this.props.projects :
      this.props.projects.filter(project => project.category === filter);

    this.setState({
      selected: filter,
      projects: filtredProjects
    })
  };

  render() {
    const {selected, projects} = this.state;

    return (
      <div>
        <Toolbar
          filters={this.props.filters}
          selected={selected}
          onSelectFilter={this.selectFilter}/>
        <Portfolio projects={projects}/>
      </div>
    );
  }
}

