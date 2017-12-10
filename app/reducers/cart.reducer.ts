import { CART_ACTIONS } from '../actions/cart.actions';
import { ICartState } from '../models/state.models';
import * as _ from 'lodash';

const INITIAL_STATE:ICartState = {
  items:[],
  recentPurchases:[]
}

export function cartReducer( state: any = INITIAL_STATE, action:any):ICartState {
    let _value = null;
    switch (action.type) {

      case CART_ACTIONS.ADD_ITEM:
        return _.merge({},state,{
          items:[action.payload]
        });

      case CART_ACTIONS.REMOVE_ITEM:
        return state;

      default:
      return state;
    }
}
