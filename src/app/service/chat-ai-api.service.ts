import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatAiApiService {

  private apiUrl = environment.apiUrl; // Update with Node.js server URL

  constructor(private http: HttpClient) { }

  public sendMessage(message: string) {
    return this.http.post<any>(`${this.apiUrl}/chat`, { message });
  }
}
