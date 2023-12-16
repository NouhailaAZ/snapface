import { Component } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent {
  faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapService: FaceSnapsService,
    private route: ActivatedRoute){}

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(snapId);
  }
  // onAddSnap() {
  //   this.snaps++;
  // }
  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, un Snap!';
    } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
    }
  }


}
