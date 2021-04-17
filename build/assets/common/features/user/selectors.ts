import RootTypes from 'RootTypes';

export const selectUser = (state: RootTypes.RootState) => state.user.user;
