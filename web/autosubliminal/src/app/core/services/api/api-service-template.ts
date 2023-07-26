import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Add @Injectable() to not have to repeat the constructor in every subclass
@Injectable()
export class ApiServiceTemplate {

  defaultHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  defaultOptions = { headers: this.defaultHeaders };

  constructor(protected httpClient: HttpClient) { }

  // can be overridden in subclass
  protected get headers(): HttpHeaders {
    return this.defaultHeaders;
  }

  // can be overridden in subclass
  protected get options(): Record<string, any> {
    return this.defaultOptions;
  }
}
