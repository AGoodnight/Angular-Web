import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

export const CART_ACTIONS = {
	ADD_ITEM:"ADD_ITEM",
	REMOVE_ITEM:"REMOVE_ITEM"
}

@Injectable()
export class CartActions{
	constructor(private ngRedux: NgRedux<any>) {}

	addItem(item:any){
		this.ngRedux.dispatch({type:CART_ACTIONS.ADD_ITEM,payload:item})
	}

	removeItem(item:any){
		this.ngRedux.dispatch({type:CART_ACTIONS.REMOVE_ITEM,payload:item})
	}

}
