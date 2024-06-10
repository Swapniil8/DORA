import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor() { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  characters:any = [
    {
      name:'DORA',
      image: 'https://www.noggin.com/app/uploads/2019/06/Dora-Copy.jpg',
      height:4.5,
      weight:40,
      iq:97,
      popularity:100,
      bravery:95,
      honesty:90,
    },
    {
      name:'BOOTS THE MONKEY',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS-QItaQCiMZ_mI8ZKGbVwRWt05-uE0UelFw&s',
      height:2.8,
      weight:28,
      iq:80,
      popularity:90,
    },
    {
      name:'SWIPER THE FOX',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWVX9ab04egc9j9c7YbostqQuaqmED83UyCA&s',
      height:3.8,
      weight:45,
      iq:90,
      popularity:85,
    },
    {
      name:'BACKPACK',
      image:'assets/backpack.jpeg',
      height:0.6,
      weight:8,
      iq:30,
      popularity:87,
    },
  ]
}
