import { Component } from '@angular/core';
import { ChatAiApiService } from '../service/chat-ai-api.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-threads-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './threads-sidebar.component.html',
  styleUrl: './threads-sidebar.component.scss'
})
export class ThreadsSidebarComponent {

  threadsArray!: Observable<any>;
  constructor(private aiService: ChatAiApiService){}

  ngOnInit(): void{
    this.threadsArray = this.aiService.getUser("661e97780635815ce1c14eb5");
    console.log(JSON.stringify(this.threadsArray));
  }
}
