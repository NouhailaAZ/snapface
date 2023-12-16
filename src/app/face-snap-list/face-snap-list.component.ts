import { Component } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent {
  faceSnaps!:FaceSnap[];

  constructor(private faceSnapsService: FaceSnapsService){}

  ngOnInit() {
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();

       // new FaceSnap(
    //   'Nouhaila',
    //   'Je suis Nouhaila',
    //   'https://th.bing.com/th/id/R.6749734e931cc13843df53219b1ef73f?rik=TqcNP0fLMvixug&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f0%2f03%2fWhite_Gardenia_flower.jpg&ehk=8BaqbVwdf1s08%2fBeTEUQS4e5z3K6npWhtiUGzT9ghec%3d&risl=&pid=ImgRaw&r=0',
    //   new Date(),
    //   0
    // );
    
  }
}
