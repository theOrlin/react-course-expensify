import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpencesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

export const ExpensesSummary = (props) => (
    <p>
    Viewing {props.expenses.length} expense{props.expenses.length > 1 ? 's' : ''} totalling {numeral(selectExpencesTotal(props.expenses) / 100).format('0,0.00')}</p>
)

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);