import { TestBed } from '@angular/core/testing';

import { PhotoService } from './photo.service';
import {Camera} from "@ionic-native/camera/ngx";
import {Storage} from '@ionic/storage';

describe('PhotoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
        Camera,
        Storage
    ]
  }));

  it('should be created', () => {
    const service: PhotoService = TestBed.get(PhotoService);
    expect(service).toBeTruthy();
  });
});
