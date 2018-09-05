import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from './../actions/expenses';

export class CreateExpense extends React.Component {
    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
    onSubmit = (expense) => {
        // props.dispatch(addExpense(expense));
        this.props.addExpense(expense);
        this.props.history.push('/');
    }
}

const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(CreateExpense);