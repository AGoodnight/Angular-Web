import { combineReducers } from 'redux';
import { uiReducer } from './ui.reducer';
import { authReducer } from './auth.reducer';

export const rootReducer = combineReducers({
  UiState: uiReducer,
  AuthReducer: authReducer
});
