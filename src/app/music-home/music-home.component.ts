import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Song } from '../models/song';
import { SongsRepository } from '../repositories/songs.repository';

@Component({
  selector: 'app-music-home',
  templateUrl: './music-home.component.html',
  styleUrls: ['./music-home.component.scss']
})
export class MusicHomeComponent implements OnInit, OnDestroy {

  songId: string;

  isPlaying: boolean = false;

  currentTime: number = 0;

  player: any;

  interval: any;

  currentSong: Song = null;

  isLooping : boolean = false;
  constructor(private _route: ActivatedRoute, private _repo: SongsRepository, private _titleService : Title) { }

  ngOnDestroy(): void {
    if(this.interval != null) {
      clearInterval(this.interval);
    }
  }

  ngOnInit(): void {
  
    this.songId = this._route.snapshot.paramMap.get('songId');
    this.currentSong = this._repo.getSongBySongId(this.songId)
    this.player = document.getElementById('#player');

    if(this.currentSong) {
      this._titleService.setTitle(`${this.currentSong.title} - ${this.currentSong.artistName}`)
      this.interval = setInterval(() => {
        this.player = document.getElementById('#player');    
        this.currentTime = this.player.currentTime;
        this.isPlaying = !this.player.paused;

        if(this.currentTime == this.player.duration) {
          if(this.isLooping) {
            this.player.currentTime = 0;
            this.player.play();
          }
        }
      }, 100)
    } else {
      this._titleService.setTitle('No Song')
    }
  }

  play() {
    this.player.play();
    this.isPlaying = true;
  }

  pause() {
    this.player.pause();
    this.isPlaying = false;
  }

  isArabic(text) {
    let pattern = /[\u0600-\u06FF\u0750-\u077F]/;
    let result = pattern.test(text);
    return result;
  }

  getPrevious() {
    this.player.currentTime = 0;
  }
}
