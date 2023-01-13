import {Link} from 'react-router-dom';

const Budget = (transaction, index) => {
    return (
        <tr className="Log">
      <td>
        {transaction.transaction.date}
      </td>
      <td>
        <Link to={`/budget/${transaction.index}`}>{transaction.transaction.item_name}</Link>
      </td>
      <td>
        {transaction.transaction.amount}
      </td>
    </tr>
    );
};

export default Budget;