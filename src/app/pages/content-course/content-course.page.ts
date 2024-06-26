import { Component, OnInit,ViewChild,ElementRef,ViewChildren,QueryList,AfterViewInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { HttpClient } from '@angular/common/http';
import { Renderer2 } from '@angular/core';


@Component({
  selector: 'app-content-course',
  templateUrl: './content-course.page.html',
  styleUrls: ['./content-course.page.scss'],
})
export class ContentCoursePage implements OnInit,AfterViewInit {

  @ViewChild('videoPlayer', { static: false }) videoPlayer!: ElementRef;
  @ViewChildren('activeVideoPlayer') activeVideoPlayers!: QueryList<ElementRef>;
  
  constructor(
    private http:HttpClient,
    private api:ApiService,
    private renderer: Renderer2
  ) { }
  
  ngOnInit() {
    // this.getContentCourse()
  }
  ngAfterViewInit(){
    this.renderer.addClass(this.activeVideoPlayers.get(0)!.nativeElement, 'active'); //otomatis memberikan kelas aktif di video pertama
  }

  contentCourse = [
    {
        "id": "1",
        "title": "Big Buck Bunny",
        "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
        "duration": "8:18",
        "uploadTime": "May 9, 2011",
        "views": "24,969,123",
        "author": "Vlc Media Player",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        "subscriber": "25254545 Subscribers",
        "isLive": true
    },
    {
        "id": "2",
        "title": "The first Blender Open Movie from 2006",
        "thumbnailUrl": "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
        "duration": "12:18",
        "uploadTime": "May 9, 2011",
        "views": "24,969,123",
        "author": "Blender Inc.",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
        "subscriber": "25254545 Subscribers",
        "isLive": true
    },
    {
        "id": "3",
        "title": "For Bigger Blazes",
        "thumbnailUrl": "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
        "duration": "8:18",
        "uploadTime": "May 9, 2011",
        "views": "24,969,123",
        "author": "T-Series Regional",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
        "subscriber": "25254545 Subscribers",
        "isLive": true
    },
    {
        "id": "4",
        "title": "For Bigger Escape",
        "thumbnailUrl": "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
        "duration": "8:18",
        "uploadTime": "May 9, 2011",
        "views": "24,969,123",
        "author": "T-Series Regional",
        "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        "description": " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
        "subscriber": "25254545 Subscribers",
        "isLive": false
    },
    
  ]
  
  currentVideo: any = this.contentCourse[0];
  
  

  playVideo(index: any) {
    this.currentVideo = this.contentCourse[index];
    this.updateVideoPlayer()
    

    //  const videoElement: HTMLVideoElement = this.videoPlayer.nativeElement;
    //  videoElement.src = this.currentVideo.videoUrl;
    //  videoElement.load();
    //  videoElement.play();
    
  }
  nextVideo() {
    const currentIndex = this.contentCourse.findIndex(video => video === this.currentVideo);
    const nextIndex = (currentIndex + 1) % this.contentCourse.length;
    this.currentVideo = this.contentCourse[nextIndex];
    this.updateVideoPlayer();
  }

  prevVideo() {
    const currentIndex = this.contentCourse.findIndex(video => video === this.currentVideo);
    const prevIndex = (currentIndex - 1 + this.contentCourse.length) % this.contentCourse.length;
    this.currentVideo = this.contentCourse[prevIndex];
    this.updateVideoPlayer();
  }
  updateVideoPlayer() {
    const videoElement: HTMLVideoElement = this.videoPlayer.nativeElement;
    const currentIndex = this.contentCourse.findIndex(video => video === this.currentVideo);
    videoElement.src = this.currentVideo.videoUrl;
    videoElement.load();
    videoElement.play();

    this.activeVideoPlayers.forEach(player => {
      this.renderer.removeClass(player.nativeElement, 'active');
    });

    this.renderer.addClass(this.activeVideoPlayers.get(currentIndex)!.nativeElement, 'active');
  }


  // contentCourse:[] = [];
  // getContentCourse(){
  //   this.api.getContentCourse().subscribe((data:any) =>{
  //     this.contentCourse = data['data'];
  //     console.log(this.contentCourse);
  //   })
  // }

}
