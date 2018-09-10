import authReducer from '../../reducers/auth';

test('should properly set user ID on login', () => {
    const uid = '123';
    const state = authReducer({}, { type: 'LOGIN', uid });
    expect(state.uid).toBe(uid);
});

test('should return empty object on logout', () => {
    const state = authReducer({ uid: 'blah' }, { type: 'LOGOUT' });
    expect(state).toEqual({});
});