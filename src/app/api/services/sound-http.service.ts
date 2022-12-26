import {Injectable} from "@angular/core"
import {HttpClient} from "@angular/common/http"
import {Sound} from "../models/Sound"

@Injectable({providedIn: "root"})
export class SoundHttpService{
  private readonly API_URL = 'https://63a5e8af318b23efa7a0ad0f.mockapi.io/music';
  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Sound[]>(this.API_URL)
  }

  get(id: number) {
    return this.http.get<Sound>(`${this.API_URL}/${id}`)
  }

  create(sound: Sound) {
    return this.http.post<void>(this.API_URL, sound)
  }

  update(sound: Sound) {
    return this.http.put<void>(`${this.API_URL}/${sound.id}`, sound)
  }

  delete(id: number) {
    return this.http.delete<void>(`${this.API_URL}/${id}`)
  }
}
