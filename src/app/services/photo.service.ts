import {Injectable, Injector} from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: Photo[] = [];
  private camera: Camera;
  private photoService: PhotoService;
  private storage: Storage;

  constructor(injector: Injector) {
    this.camera = injector.get(Camera);
    this.photoService = injector.get(PhotoService);
    this.storage = injector.get(Storage);
  }

  loadSaved() {
    this.storage.get('photos').then((photos) => {
      this.photos = photos || [];
    });
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      // Get the taken photo
      this.photos.unshift({data: 'data:image/jpeg;base64,' + imageData});

      // Save all the photos
      this.storage.set('photos', this.photos);
    }, (err) => {
      // Handle error:
      console.log('Camera issue:' + err);
    });
  }
}

class Photo {
  data: any;
}
