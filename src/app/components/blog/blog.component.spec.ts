import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { AppService } from '../../services/app.service';
import { BlogComponent } from './blog.component';

describe('BlogComponent', () => {
    let component: BlogComponent;
    let fixture: ComponentFixture<BlogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                imports: [
                    HttpModule
                ],
                declarations: [
                    BlogComponent
                ],
                providers: [
                    AppService
                ]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
