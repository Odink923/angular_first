import { Component, OnInit } from '@angular/core';
import {SoundHttpService} from "../../api/services/sound-http.service";
import {Sound} from "../../api/models/Sound";
import { finalize, first } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit{

  sound: Sound[] = []

  constructor(private soundHttpService:SoundHttpService) {
  this.getAll()
  }
  ngOnInit():void {
  }

  getAll(){
    return this.soundHttpService.getAll().subscribe({
      next: sound => {
        this.sound = sound
      },
      error: error => console.error(error)
    })
  }

  delete(id: number) {
    this.soundHttpService.delete(id).subscribe({
      next: () => location.reload(),
      error: error => console.error(error)
    })
  }
 

}

