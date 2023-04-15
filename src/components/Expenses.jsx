import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = () => {
    const expenses = [
        { date: new Date(2020, 3, 28), title: 'New TV', amount: 857.99 },
        { date: new Date(2021, 4, 9), title: 'PlayStation 5', amount: 499.39 },
        { date: new Date(2022, 7, 15), title: 'XBox Series S', amount: 299.19 },
        { date: new Date(2023, 1, 11), title: 'Car Insurance', amount: 387.69 },
    ];

    return (
        <div className='expenses'>
            <ExpenseItem
                date={expenses[0].date}
                title={expenses[0].title}
                amount={expenses[0].amount}
            />
            <ExpenseItem
                date={expenses[1].date}
                title={expenses[1].title}
                amount={expenses[1].amount}
            />
            <ExpenseItem
                date={expenses[2].date}
                title={expenses[2].title}
                amount={expenses[2].amount}
            />
            <ExpenseItem
                date={expenses[3].date}
                title={expenses[3].title}
                amount={expenses[3].amount}
            />
        </div>
    );
};

export default Expenses;
