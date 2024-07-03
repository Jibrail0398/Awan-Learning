import { Component, OnInit,ViewChild,ElementRef,ViewChildren,QueryList,AfterViewInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { HttpClient } from '@angular/common/http';
import { Renderer2 } from '@angular/core';


interface Content {
  id: number;
  course_id: number;
  title: string;
  description: string;
  vidioURL: string;
  thumnailURL: string | null;
  status: string;
  created_at: string;
  updated_at: string;
}

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
    private renderer: Renderer2,
    
  ) { }
  
  ngOnInit() {
    this.getContents();
  }
  ngAfterViewInit() {
    // Tunggu sebentar untuk memastikan view sudah selesai dirender
    setTimeout(() => {
      this.initializeActiveVideo();
    }, 0);
  }
  private initializeActiveVideo() {
    if (this.activeVideoPlayers && this.activeVideoPlayers.length > 0) {
      const firstPlayer = this.activeVideoPlayers.first;
      if (firstPlayer) {
        this.renderer.addClass(firstPlayer.nativeElement, 'active');
      }
    }
  }

  contentCourse: Content[] = [];

  id=localStorage.getItem("data");
  
  
  currentVideo: Content | null = null;
  getContents() {
    this.api.getContent(this.id).subscribe(
      (response: any) => {
        if (Array.isArray(response)) {
          this.contentCourse = response.map(item => ({
            id: item.id,
            course_id: item.course_id,
            title: item.title,
            description: item.description,
            vidioURL: item.vidioURL,
            thumnailURL: item.thumnailURL,
            status: item.status,
            created_at: item.created_at,
            updated_at: item.updated_at
          }));
          
          if (this.contentCourse.length > 0) {
            this.currentVideo = this.contentCourse[0];
          }
        }
        console.log('Contents:', this.contentCourse);
      },
      (error) => {
        console.error('Error fetching contents:', error);
      }
    );
  }
  
  

  playVideo(index: any) {
    this.currentVideo = this.contentCourse[index];
    this.updateVideoPlayer()
    
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
    if (this.currentVideo && this.videoPlayer) {
      const videoElement: HTMLVideoElement = this.videoPlayer.nativeElement;
      const currentIndex = this.contentCourse.findIndex(video => video === this.currentVideo);
      
      if (this.currentVideo.vidioURL) {
        videoElement.src = this.getVideoUrl(this.currentVideo.vidioURL);
        videoElement.load();
        videoElement.play().catch(error => console.error('Error playing video:', error));
      }
  
      this.activeVideoPlayers.forEach(player => {
        this.renderer.removeClass(player.nativeElement, 'active');
      });
  
      const activePlayer = this.activeVideoPlayers.get(currentIndex);
      if (activePlayer) {
        this.renderer.addClass(activePlayer.nativeElement, 'active');
      }
    }
  }


  getVideoUrl(url: string): string {
    return `https://awan.ylladev.my.id${url}`;
  }

}
