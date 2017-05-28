import { Injectable } from '@angular/core';
import {
    Http,
    RequestOptions,
    RequestMethod,
    Response,
    Request,
    Headers
} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService {
    static checkStatus(response: Response) {
        const status = response.status;

        if (!status) {
            return;
        }

        if (status < 200 || status >= 300) {
            throw new Error('Bad response status: ' + status);
        }
    }

    static handleResponse(response: Response): Object[] {
        AppService.checkStatus(response);
        return response.json() || {};
    }

    static handleError(error: any): Observable<Object> {
        console.error('makeRequest error: ', error);

        const errMessage = error.message || 'Server error';
        throw Observable.throw(errMessage);
    }

    constructor(private http: Http) {
    }

    makeRequest(url): Observable<Object[]> {
        const method = RequestMethod.Get;
        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({headers, method, url});

        return this.http
            .request(new Request(options))
            .map(AppService.handleResponse)
            .catch(AppService.handleError);
    }
}
