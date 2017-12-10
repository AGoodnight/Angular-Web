export interface IUiState{
  isMobile:boolean;
  isTablet:boolean;
  isLarge:boolean;
  frozen:boolean;
  windowWidth:number;
  toasterConfig:any;
  currentRoute:string;
}

export interface IAuthState{
  loggedIn:boolean;
  roles:any;
  token:string;
  user:any;
}

export interface ICartState{
  items:any;
  recentPurchases:any;
}

export enum ESimpleState{
  ready = 0,
  set = 3,
  wait,
  go = 1
}
