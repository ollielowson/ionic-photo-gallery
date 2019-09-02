import {Component, Injector, OnInit} from '@angular/core';
import {PhotoService} from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  private photoService: PhotoService;

  constructor(injector: Injector) {
    this.photoService = injector.get(PhotoService);
  }

  ngOnInit(): void {
    this.photoService.loadSaved();
  }
}
