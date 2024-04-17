import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatAiApiService {

  private apiUrl = environment.apiUrl; // Update with Node.js server URL

  constructor(private http: HttpClient) { }

  public firstMessage(userId: string, message: string) {
    return this.http.post<any>(`${this.apiUrl}/chat/new`, { userId, message });
  }

  public getUser(userId: string) {
    return this.http.get<any>(`${this.apiUrl}/user/${userId}`);
  }

  public getAllMessagesInThread(threadsId: string) {
    return this.http.get<any>(`${this.apiUrl}/messages/${threadsId}`);
  }

  public createThreadAndRun(userId: string, role: string, content: string){
    return this.http.post<any>(`${this.apiUrl}/threads/run}`, { userId, role, content });
  }
}
