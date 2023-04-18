import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
    {
        id: 'iq1',
        title: 'Steam Deck',
        amount: 399.69,
        date: new Date(2023, 1, 11),
    },
    {
        id: 'iq2',
        title: 'Nintendo Switch',
        amount: 299.19,
        date: new Date(2022, 7, 15),
    },
    {
        id: 'iq3',
        title: 'PlayStation 5',
        amount: 499.39,
        date: new Date(2021, 4, 9),
    },
    {
        id: 'iq4',
        title: 'LG Oled TV',
        amount: 857.99,
        date: new Date(2020, 3, 28),
    },
    {
        id: 'iq5',
        title: 'Lenovo Laptop',
        amount: 967.49,
        date: new Date(2020, 7, 13),
    },
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => [expense, ...prevExpenses]);
    };

    return (
        <div className='App'>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
};

export default App;
