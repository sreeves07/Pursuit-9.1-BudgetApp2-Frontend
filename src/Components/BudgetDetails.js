import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import FourOFour from '../Pages/FourOFour';
import './BudgetDetails.css'
const API = process.env.REACT_APP_API_URL

const BudgetDetails = () => {
    const [transactions, setTransactions] = useState([])
    const navigate = useNavigate()
    const { index } = useParams() 
   
    function handleDelete() {
        axios.delete(`${API}/budget/${index}`)
            .then(() => {
                navigate("/logs")
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get(`${API}/budget/${index}`)
            .then((res) => {
                setTransactions(res.data)
            })
            .catch(() => {
                navigate(FourOFour)
            })
    },[index, navigate])

    return (
        <div>
            <div className='logDetails'>
                <h1>Transaction Details</h1>
                <h2>Item Name: {transactions.item_name} </h2>
                <h3>Amount: {transactions.amount}</h3>
                <h3>Date: {transactions.date}</h3>
                <h3>From: {transactions.from}</h3>
                <h3>Category: {transactions.category}</h3>
            </div>

            <div className='buttons'>
                <div className='backButton'>
                    <Link to={"/budget"}>
                        <button>Back</button>
                    </Link>
                </div>

                <div className='editButton'>
                    <Link to={`/budget/${index}/edit`}>
                        <button>Edit</button>
                    </Link>
                </div>

                <div className='deleteButton'>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default BudgetDetails;