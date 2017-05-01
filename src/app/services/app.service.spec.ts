import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { AppService } from './app.service';

describe('AppService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule
            ],
            providers: [
                AppService
            ]
        });
    });

    it('should ...', inject([AppService], (service: AppService) => {
        expect(service).toBeTruthy();
    }));
});
