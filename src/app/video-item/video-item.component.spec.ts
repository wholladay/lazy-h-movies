import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VideoItemComponent} from './video-item.component';

describe('VideoItemComponent', () => {
    let component: VideoItemComponent;
    let fixture: ComponentFixture<VideoItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [VideoItemComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(VideoItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});