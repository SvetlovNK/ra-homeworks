const WithGroup = (Component, settings) => {
  return class GroupedComponent extends React.Component {
    state = {
      list: []
    };

    constructor(props) {
      super(props);

      const {sortFunc, agregateFunc, isShortMonth = false} = settings;
      this.sortFunct = sortFunc && sortFunc.bind(this);
      this.agregateFunc = agregateFunc && agregateFunc.bind(this);
      this.isShortMonth = isShortMonth;

      this.updateData();
    }

    componentWillReceiveProps(nextProps) {
      const {list} = nextProps;
      this.setState({list}, this.updateData);
    }

    updateData = () => {
      const {list} = this.state;
      let updatedList = [];

      console.log(list);

      updatedList = this.sortList(list);
      updatedList = this.agregateList(updatedList);
      updatedList = this.shortMonth(updatedList);

      this.setState({list: updatedList});
    };

    agregateList = (list) => {
      if (!this.agregateFunc) return list;

      return this.agregateFunc(list);
    };

    sortList = (list) => {
      if (!this.sortFunct) return list;

      return this.sortFunct(list);
    };

    shortMonth = (list) => {
      if (!this.isShortMonth) return list;

      return list.map(({month, ...spread}) => {
        if (!month) return;

        const shortMonth = month.substr(0, 3).toUpperCase();

        return {
          month: shortMonth,
          ...spread
        }
      });
    };

    render() {
      const {list} = this.state;
      console.log('render');

      return (
        <Component {...this.props} list={list}/>
      )
    }
  }
};