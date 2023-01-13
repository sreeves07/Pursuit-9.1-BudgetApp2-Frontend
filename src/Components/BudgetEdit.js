import React, { useState, useEffect } from 'react';
import { Link,useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL

const BudgetEdit = () => {
    const [transaction, setTransaction] = useState({
        item_name: "",
        amount: 0,
        date: "",
        from: "",
        category: ""
    })
    const navigate = useNavigate()
    let { index } = useParams()

    function handleTextChange(event) {
        setTransaction({...transaction, [event.target.id]: event.target.value})
    }

    function handleSubmit(event) {
        event.preventDefault()
        axios.post(`${API}/budget`, transaction)
            .then((res) => {
                setTransaction(res.data)
                navigate(`/budget`)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get(`${API}/budget/${index}`)
            .then((res) => {
                setTransaction(res.data)
            })
            .catch(err => console.log(err))
    },[index, navigate])

    return (
        <div className="New">
        <form onSubmit={handleSubmit}>
        <label htmlFor="itemName">Item Name:</label>
        <input
          id="itemName"
          type="text"
          value={transaction.item_name}
          onChange={handleTextChange}
          placeholder="Item Name"
          required
        />
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
          required
          value={transaction.amount}
          placeholder="amount"
          onChange={handleTextChange}
        />
        <label htmlFor="date">Date:</label>
        <textarea
          id="date"
          type="text"
          value={transaction.date}
          onChange={handleTextChange}
        />
        <label htmlFor="from">From:</label>
        <input
          id="from"
          type="text"
          value={transaction.from}
          onChange={handleTextChange}
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          value={transaction.category}
          onChange={handleTextChange}
          placeholder="category"
        />
        <br />

        <input type="submit" />
      </form>
      <Link to={`/budget`}>
        <button>Nevermind!</button>
      </Link>
    </div>
    );
};


export default BudgetEdit;

