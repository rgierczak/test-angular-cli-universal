import { async, inject, TestBed } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import {
    HttpModule, Http, XHRBackend, Response, ResponseOptions
} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

import { AppService } from './app.service';
import { Post } from '../interfaces/post';

const getMockedPosts = (): Post[] => {
    return [{
        'content': 'test content',
        'title': 'test title',
        'id': '123'
    }, {
        'content': 'test content',
        'title': 'test title',
        'id': '456'
    }];
};

describe('AppService', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
                imports: [
                    HttpModule
                ],
                providers: [
                    AppService,
                    {
                        provide: XHRBackend, useClass: MockBackend
                    }
                ]
            })
            .compileComponents();
    }));

    it('can instantiate service when inject service',
        inject([AppService], (service: AppService) => {
            expect(service instanceof AppService).toBe(true);
        }));

    it('can instantiate service with "new"', inject([Http], (http: Http) => {
        expect(http).not.toBeNull('http should be provided');
        const service = new AppService(http);
        expect(service instanceof AppService)
            .toBe(true, 'new service should be ok');
    }));

    it('can provide the mockBackend as XHRBackend',
        inject([XHRBackend], (backend: MockBackend) => {
            expect(backend).not.toBeNull('backend should be provided');
        }));

    describe('makeRequest', () => {
        let backend: MockBackend;
        let service: AppService;
        let posts: Post[];
        const url = 'http://mock-address.com';

        beforeEach(inject([Http, XHRBackend],
            (http: Http, mockBackend: MockBackend) => {
                backend = mockBackend;
                service = new AppService(http);
                posts = getMockedPosts();
            }));

        it('should have expected fake posts', async(inject([], () => {
            backend
                .connections
                .subscribe(
                    (connection: MockConnection) => {
                        const mockResponseOptions = new ResponseOptions({
                            status: 200,
                            body: posts
                        });
                        const mockResponse = new Response(mockResponseOptions);
                        connection.mockRespond(mockResponse);
                    });

            service
                .makeRequest(url)
                .subscribe(
                    (resp) => {
                        expect(resp.length).toEqual(posts.length);
                    });
        })));

        it('should treat 404 as an Observable error', async(inject([], () => {
            backend
                .connections
                .subscribe(
                    (connection: MockConnection) => {
                        const mockResponseOptions = new ResponseOptions({
                            status: 404
                        });
                        const mockResponse = new Response(mockResponseOptions);
                        connection.mockRespond(mockResponse);
                    });

            service
                .makeRequest(url)
                .subscribe(
                    (resp) => {
                    },
                    (err) => {
                        expect(err.error)
                            .toMatch(/Bad response status/,
                                'should catch bad response status code');
                        return Observable.of(null);
                    });
        })));
    });
});
