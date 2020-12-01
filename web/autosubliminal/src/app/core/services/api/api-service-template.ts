import { HttpClient, HttpHeaders } from '@angular/common/http';

export class ApiServiceTemplate {

  defaultHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  defaultOptions = {
    headers: this.defaultHeaders
  };

  constructor(httpClient: HttpClient) { }

  // can be overridden in subclass
  protected get headers(): HttpHeaders {
    return this.defaultHeaders;
  }

  // can be overridden in subclass
  protected get options(): {} {
    return this.defaultOptions;
  }
}
