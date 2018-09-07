import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '2'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '5'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: 4,
        description: 'Test expense',
        note: 'Test',
        amount: 3000,
        createdAt: moment
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const expense = {
        description: 'Test expense',
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: expense
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe(expense.description);
});

test('should not edit an expense if expense not found', () => {
    const expense = {
        description: 'Test expense',
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: '6',
        updates: expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});


test('should set expenses', () =>{
    const expense = {
        description: 'Test expense',
    };
    const action = {
        type: 'SET_EXPENSES',
        expenses
    };
    const state = expensesReducer([expense], action);
    expect(state).toEqual(expenses);
});