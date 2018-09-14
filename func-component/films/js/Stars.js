'use strict';

function getStarsList(counter = 0, list = []) {
  if (counter > 0) {
    list.push(<Star/>);
    return getStarsList(counter - 1, list);
  }

  return list;
}

function Stars({count}) {
  const starList = getStarsList(count);

  return <ul className="card-body-stars u-clearfix">{starList.map(star => <li>{star}</li>)}</ul>;
}

Stars.defaultProps = {
  count: 5
};
