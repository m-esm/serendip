/**
 * routes to introduce to express :) 
 */
export interface HttpRouteInterface {

    method: string;
    route: string;
    controllerObject: object;
    controllerName: string;
    endpoint: string;
    publicAccess:boolean;
    isStream : boolean;
  
  }
  
  