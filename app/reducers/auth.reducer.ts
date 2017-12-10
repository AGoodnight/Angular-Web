import { IAuthState } from '../models/state.models';
import { AUTH_ACTIONS } from '../actions/auth.actions';
import { USERS } from '../app/permissions.constants';

import * as _ from 'lodash';

const INITIAL_STATE: IAuthState = {
  loggedIn:false,
  roles:[],
  user:{
    "user_id":null,
    "roles":[],
    "exp":null,
    "life-span":null
  },
  token:''
}


export function authReducer( state: any = INITIAL_STATE, action:any):IAuthState {
  let _state = {};
  switch (action.type) {

    case AUTH_ACTIONS.KILL_LOCAL_STATE:
      return INITIAL_STATE;

    case AUTH_ACTIONS.LOGIN:
      return Object.assign({},state,{
        loggedIn:action.payload
      });

    case AUTH_ACTIONS.SET_USER_ROLES:
      return Object.assign({},state,{
        roles:action.payload
      });

    case AUTH_ACTIONS.SET_TOKEN:
      return Object.assign({},state,{
        token:action.payload
      });

    case AUTH_ACTIONS.SET_USER:
    console.log("REDUX -- Current User: ", action.payload);
      return _.merge({},state,{
        user:action.payload
      });

    default:
      return state;
  }
}
