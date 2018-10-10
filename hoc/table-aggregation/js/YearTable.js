'use strict';

const YearTable = props => {
  const {list} = props;

  return (
    <div>
      <h2>Year Table</h2>
      <table>
        <tr>
          <th>Year</th>
          <th>Amount</th>
        </tr>
        {list.map(item => (
          <tr key={item.year}>
            <td>{item.year}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};