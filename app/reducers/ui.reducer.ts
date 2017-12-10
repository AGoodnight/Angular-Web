import { UI_ACTIONS } from '../actions/ui.actions';
import { IUiState } from '../models/state.models';
import * as _ from 'lodash';

const INITIAL_STATE:IUiState = {
  isMobile:true, // assume mobile first, good practice
  isTablet:false,
  isLarge:false,
  frozen:false,
  windowWidth:null,
  toasterConfig:{
    msg:'',
    style:'',
    duration:0
  },
  currentRoute:'/'
}

export function uiReducer( state: any = INITIAL_STATE, action:any):IUiState {
    let _value = null;
    switch (action.type) {

      case UI_ACTIONS.CURRENT_ROUTE_URL:
        _value = Object.assign({},state,{
          "currentRoute":action.payload
        })
        return _value;

      case UI_ACTIONS.BROWSER_WIDTH:
        console.log(action.payload)
        _value = Object.assign({},state,{
          'isLarge':(action.payload > 768) ? true : false,
          'isTablet':(action.payload <= 768) ? true : false,
          'isMobile':(action.payload <= 480) ? true : false,
          'windowWidth':(action.payload)
        });
        return _value;

        case UI_ACTIONS.CUE_TOAST:
          return Object.assign({},state,{
            toasterConfig:{
              msg:action.payload['msg'],
              dismiss:action.payload['dismiss'],
              style:action.payload['style'],
              duration:(action.payload['duration']) ? action.payload['duration'] : 3000
            }
          })

        case UI_ACTIONS.ERASE_TOAST:
          return Object.assign({
            toasterConfig:{
              msg:'',
              style:'',
              duration:0
            }
          })

        case UI_ACTIONS.FREEZE:
        console.log('REDUX -- UI Frozen');
          return Object.assign({},state,{
            frozen:true
          });

        case UI_ACTIONS.THAW:
          console.log('REDUX -- UI Thawed');
          return Object.assign({},state,{
            frozen:false
          });

      default:
      return state;
    }
}
