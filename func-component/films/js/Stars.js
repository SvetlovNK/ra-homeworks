'use strict';

function getStarsList(counter = 0,) {
  const list = [];

  if (counter > 5 || !isNumber(counter)) return list;

  while (counter) {
    list.push(<Star/>);
    counter -= 1;
  }

  return list;
}

function Stars({count}) {
  const starList = getStarsList(count);

  return (
    <div>
      {starList ?
        <ul className="card-body-stars u-clearfix">{starList.map((star, i) => <li key={i}>{star}</li>)}</ul> :
        null
      }
    </div>
  );
}

Stars.defaultProps = {
  count: 5
};