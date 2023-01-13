import React, { useState, useEffect } from 'react';
import Budget from "./Budget"
import axios from 'axios';
const API = process.env.REACT_APP_API_URL

const Transactions = () => {
    const [transactions, setTransactions] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        axios.get(`${API}/budget`)
            .then((res) => {
                setTransactions(res.data)
            })
            .catch(err => console.log(err))
    },[])

    useEffect(() => {
        let localTotal = 0;
        for(let trans of transactions) {
            if(trans.amount >= 0 ){
                localTotal += Number(trans.amount);
            } else {
                localTotal -= Number(trans.amount);
            }
        }
        setTotal(localTotal);
    }, [transactions]);

    return (
        <div className="Transactions">
        <section>
          <table>
            <thead>
              <tr>
                <th>Bank Account Total: ${total}     
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => {
                return <Budget key={index} transaction={transaction} index={index} />;
              })}
            </tbody>
          </table>
        </section>
      </div>
    );
};

export default Transactions;