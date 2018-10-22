const WithSort = (callback, propName = '', objName = '') => (Component) => {
  return class SortComponent extends React.Component {
    sortList = (props, propName, objName) => {
      const {list} = props;
      return callback(list, objName);
    };

    render() {
      return <Component {...this.props} sortedList={this.sortList(this.props, propName, objName)}/>;
    }
  }
};