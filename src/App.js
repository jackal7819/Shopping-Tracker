import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
    const expenses = [
        { date: new Date(2020, 3, 28), title: 'New TV', amount: 857.99 },
        { date: new Date(2021, 4, 9), title: 'PlayStation 5', amount: 499.39 },
        { date: new Date(2022, 7, 15), title: 'XBox Series S', amount: 299.19 },
        { date: new Date(2023, 1, 11), title: 'Steam Deck', amount: 399.69 },
    ];

    const addExpenseHandler = (expense) => {
        console.log(expense);
    };

    return (
        <div className='App'>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
};

export default App;
