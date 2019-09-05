import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {Tab2Page} from './tab2.page';
import {Camera} from "@ionic-native/camera/ngx";
import {IonicStorageModule, Storage} from '@ionic/storage';

describe('Tab2Page', () => {
    let component: Tab2Page;
    let fixture: ComponentFixture<Tab2Page>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                Camera
            ],
            declarations: [Tab2Page],
            imports: [
                IonicModule.forRoot(),
                IonicStorageModule.forRoot()
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(Tab2Page);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
