import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiMethod } from '../constants/apiRestRequest';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  requestCall(url:any,method:ApiMethod,body:any,options?:any){
    let response:any;

    switch (method) {
      case ApiMethod.GET:
        response = this.http.get<any>(url,options).pipe(
          catchError((err)=> this.handleError(err)))
        break;

      case ApiMethod.POST:
        response = this.http.post<any>(url,body,options).pipe(
          catchError((err)=> this.handleError(err)))
        break;

      case ApiMethod.PUT:
        response = this.http.put<any>(url,body,options).pipe(
          catchError((err)=> this.handleError(err)))
        break;

      case ApiMethod.PATCH:
        response = this.http.patch<any>(url, body, options).pipe(
          catchError((err) => this.handleError(err)))
        break;

      case ApiMethod.DELETE:
        response = this.http.delete<any>(url, { body, ...options }).pipe(
          catchError((err)=> this.handleError(err)))
        break;
      default:
        break;
      }

      return response;
  }

  handleError(error:HttpErrorResponse):Observable<any>{

    if (error.error instanceof ErrorEvent) {
        console.error('An error occured',error.error.message);
    } else {
      // to show which error in snackbar or some where.
      // this.whichError(error.status,error.message)
    }
    return throwError(()=> error)
  }

  whichError(){

  }
}
