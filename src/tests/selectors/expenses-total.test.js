import selectExpencesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expense is provided', () => {
    const zeroExpenses = [];
    const result = selectExpencesTotal(zeroExpenses);
    expect(result).toBe(0);
});

test('should correctly add up a single expense', () => {
    const singeExpense = [expenses[0]];
    const result = selectExpencesTotal(singeExpense);
    expect(result).toBe(expenses[0].amount);
})

test('should correctly add up multiple expense', () => {
    const result = selectExpencesTotal(expenses);
    expect(result).toBe(114195);
});