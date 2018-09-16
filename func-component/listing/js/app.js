'use strict';

const API_URL = 'https://neto-api.herokuapp.com/etsy';
// const API_URL = 'https://neto-api.herokuapp.com'; /* Error link */

const App = FetchDataComponent(Listing, API_URL);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
