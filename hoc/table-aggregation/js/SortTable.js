'use strict';

const SortTable = props => {
  const {sortedList} = props;

  return (
    <div>
      <h2>Sort Table</h2>
      <table>
        <tr>
          <th>Date</th>
          <th>Amount</th>
        </tr>
        {sortedList.map((item, index) => (
          <tr key={index}>
            <td>{item.date}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};