import { Component,OnInit,ViewChild } from '@angular/core';
import {FormBuilder, FormGroup,Validators} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { SoundHttpService } from "../../../api/services/sound-http.service";
import { finalize, first } from "rxjs";
import { Sound } from "../../../api/models/Sound";
import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
  selector: 'app-music-item',
  templateUrl: './music-item.component.html',
  styleUrls: ['./music-item.component.css']
})
export class MusicItemComponent implements OnInit{
  formGroup!: FormGroup;
  sound: Sound = new Sound();
  isLoading: boolean = false;

  constructor(private soundHttpService: SoundHttpService,
              private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private matSnackBar: MatSnackBar) {
    this.initFormGroup();

    const {id} = this.activatedRoute.snapshot.params;
    if (id) {
      this.sound.id = id;
      this.getSound(id);
    }
  }
  getSound(id: number) {
    this.isLoading = true;
    this.soundHttpService.get(id)
      .subscribe({
          next: sound => {
            this.sound = sound;
            this.formGroup.patchValue({
              name: sound.name,
              genre: sound.genre,

            });
          },
          error: error => {
            console.error(error)
          }
        }
      )
  }
  initFormGroup() {
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      genre: [null, Validators.required],
    })
  }
  ngOnInit(): void {
  }
  save() {
    this.sound.name = this.formGroup.controls['name'].value;
    this.sound.genre = this.formGroup.controls['genre'].value;
    this.sound.id ? this.update(this.sound) : this.create(this.sound);
  }
  create(sound: Sound) {
    this.soundHttpService.create(sound)
      .subscribe({
        next: () => {
          this.router.navigate(['/music']);
        },
        error: error => {
          console.error(error)
        }
      })
  }
  update(sound: Sound) {
    this.soundHttpService.update(sound)
      .subscribe({
        next: () => {
          this.router.navigate(['/music']);
        },
        error: error => {
          console.error(error)
        }
      })
  }

}
