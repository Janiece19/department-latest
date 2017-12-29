import { Injectable } from '@angular/core';
import { Department } from '../shared/form-model'
import { HttpClient } from '@angular/common/http'
@Injectable()
export class FormService {
  private _baseUrl = "http://localhost:4000/";
  constructor(private _http:HttpClient) {
  }
   getDepartment() {
      return this._http.get<any>(this._baseUrl + "emp/departments") 
   }
   saveDepartment(departments:Department) {
    return this._http.post<any>(this._baseUrl + "emp/departments",departments)
  } 
  updateDepartment(departments:Department){ 
    return this._http.put<any>(this._baseUrl +'emp/departments',departments)
  }
  deleteDepartment(id:number){
    return this._http.delete<any>(this._baseUrl +'emp/departments/' + id)
  }
}
