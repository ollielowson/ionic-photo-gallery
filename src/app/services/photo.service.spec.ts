import { TestBed } from '@angular/core/testing';

import { PhotoService } from './photo.service';
import {Camera} from "@ionic-native/camera";

describe('PhotoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
        Camera
    ]
  }));

  it('should be created', () => {
    const service: PhotoService = TestBed.get(PhotoService);
    expect(service).toBeTruthy();
  });
});
