import { Component } from '@angular/core';
import {
  CameraPreview,
  CameraPreviewPictureOptions,
  CameraPreviewOptions,
  CameraPreviewDimensions
} from '@ionic-native/camera-preview/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [CameraPreview]
})
export class HomePage {

  constructor(
    private camPreview: CameraPreview
  ) { }

  startCamera() {
    // start camera
    this.camPreview.startCamera(
      {
        x: 0,
        y: 0,
        width: window.screen.width,
        height: window.screen.height,
        camera: 'rear',
        tapPhoto: true,
        previewDrag: true,
        toBack: true,
        alpha: 1
      }
    ).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      });
  }

}
