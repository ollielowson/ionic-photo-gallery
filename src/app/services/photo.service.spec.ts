import {TestBed} from '@angular/core/testing';

import {PhotoService} from './photo.service';
import {Camera} from "@ionic-native/camera/ngx";
import {IonicStorageModule, Storage} from '@ionic/storage';

describe('PhotoService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [
            Camera
        ],
        imports: [
            IonicStorageModule.forRoot()
        ]
    }));

    it('should be created', () => {
        const service: PhotoService = TestBed.get(PhotoService);
        expect(service).toBeTruthy();
    });
});
