import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

export const UI_ACTIONS = {

	CURRENT_ROUTE_URL:'CURRENT_ROUTE_URL',
	CURRENT_ROUTE_PATH:'CURRENT_ROUTE_PATH',

	// Javascript 'media query'
	// Use with ['class.<yourClassName>']='<condition>'
	BROWSER_WIDTH:'BROWSER_WIDTH',

	// Set the Toast configuration on Cue
	CUE_TOAST:'CUE_TOAST',
	ERASE_TOAST:'ERASE_TOAST',

	// If you need to 'freeze' the interface during a process
	FREEZE:'FREEZE',
	THAW:'THAW',

	KILL_LOCAL_STATE:'KILL_LOCAL_STATE'
}

@Injectable()
export class UIActions{
	constructor(private ngRedux: NgRedux<any>) {}

	freeze(){
		this.ngRedux.dispatch({type:UI_ACTIONS.FREEZE})
	}
	thaw(){
		this.ngRedux.dispatch({type:UI_ACTIONS.THAW})
	}
	setUrl(url:any){
		this.ngRedux.dispatch({type:UI_ACTIONS.CURRENT_ROUTE_URL,payload:url})
	}
	setPath(path:any){
		this.ngRedux.dispatch({type:UI_ACTIONS.CURRENT_ROUTE_PATH,payload:path})
	}
	cueToast(config:any){
		this.ngRedux.dispatch({type:UI_ACTIONS.CUE_TOAST,payload:config})
	}
	removeToast(){
		this.ngRedux.dispatch({type:UI_ACTIONS.ERASE_TOAST})
	}
	trackBrowserWidth(width:any){
		console.log(width)
		this.ngRedux.dispatch({type:UI_ACTIONS.BROWSER_WIDTH,payload:width})
	}
	killState(){}

}
