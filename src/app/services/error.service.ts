import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

/**
 * Service to control the erros in this app
 */
@Injectable()
export class ErrorService {
  subject= new Subject(); 
  constructor() { }

  /**
   * Notify a error
   * @param error No
   */
  sendError(error){
    this.subject.next(error);
  }
  /**
   * For sucribbing the posiible errors
   */
  getErrorObs():Observable<any>{
    return this.subject.asObservable();
  }
}
