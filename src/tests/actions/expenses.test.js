import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should set up removeExpense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should set up removeExpense action object', () => {
    const action = editExpense('123abc', { amount: 213 });
    expect(action).toEqual({ type: 'EDIT_EXPENSE', id: '123abc', updates: { amount: 213 } });
});

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Test',
        amount: 12300,
        createdAt: 1000,
        note: 'Test'
    };

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual(
        {
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                description: '',
                note: '',
                amount: 0,
                createdAt: 0
            }
        }
    );
});