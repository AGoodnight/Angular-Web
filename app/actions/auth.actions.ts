import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

export const AUTH_ACTIONS = {
	KILL_LOCAL_STATE:"KILL_LOCAL_STATE",
	SET_USER:"SET_USER",
	LOGIN:"LOGIN",
	SET_USER_ROLES:"SET_USER_ROLES",
	SET_TOKEN:"SET_TOKEN"
}

@Injectable()
export class AuthActions{
	constructor(private ngRedux: NgRedux<any>) {}

	setUser(payload:any){
		this.ngRedux.dispatch({ type: AUTH_ACTIONS.SET_USER,payload:payload });
	}

	setToken(payload:any){
		this.ngRedux.dispatch({ type: AUTH_ACTIONS.SET_TOKEN,payload:payload});
	}

	setUserRoles(payload:any){
		this.ngRedux.dispatch({ type: AUTH_ACTIONS.SET_USER_ROLES,payload:payload});
	}

	login(payload:any){
		this.ngRedux.dispatch({type:AUTH_ACTIONS.LOGIN,payload:payload});
	}

	killState(){
		this.ngRedux.dispatch({type:AUTH_ACTIONS.KILL_LOCAL_STATE});
	}

}
