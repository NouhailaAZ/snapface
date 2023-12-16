import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps : FaceSnap[] = [
        {
            id :1,
            title : 'flower 1',
            description : 'description about flower 1',
            createdDate : new Date(),
            snaps : 1,
            imageUrl:'https://th.bing.com/th/id/R.6749734e931cc13843df53219b1ef73f?rik=TqcNP0fLMvixug&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f0%2f03%2fWhite_Gardenia_flower.jpg&ehk=8BaqbVwdf1s08%2fBeTEUQS4e5z3K6npWhtiUGzT9ghec%3d&risl=&pid=ImgRaw&r=0',
            location:'flower'
        },
        {
            id :2,
            title : 'flower 2',
            description : 'description about flower 2',
            createdDate : new Date(),
            snaps : 0,
            imageUrl:'https://th.bing.com/th/id/R.73259c14e6f4d2e4cdf8df3e7dfe792d?rik=WOpvXkKvpyuScg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-rEqVgkdnuxE%2fTWd6Fm6EWtI%2fAAAAAAAABSc%2fcWCehI51v_Y%2fs1600%2fred_rose_flower3.jpg&ehk=AQUtaDnLdKFcGkdtOR%2beulnV10WP45I9cPK306ieyRg%3d&risl=&pid=ImgRaw&r=0',
            location:'flowers'  
        },
        {
            id :3,
            title : 'flower 3',
            description : 'description about flower 3',
            createdDate : new Date(),
            snaps : 0,
            imageUrl:'https://th.bing.com/th/id/OIP.iXmCQbkMwTs5naGVY16k-QHaFj?rs=1&pid=ImgDetMain',
            // location:'flower'  
        }
    ];
  
    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        }
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }

    // snapFaceSnapById(id: number): void {
    //     const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === id);
    //     if (faceSnap) {
    //         faceSnap.snaps++;
    //     } else {
    //         throw new Error('FaceSnap not found!');
    //     }
    // }

    // unsnapFaceSnapById(id: number): void {
    //     const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === id);
    //     if (faceSnap) {
    //         faceSnap.snaps--;
    //     } else {
    //         throw new Error('FaceSnap not found!');
    //     }
    // }
}