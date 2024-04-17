import {Component, OnInit} from '@angular/core';
import { ChatAiApiService } from '../service/chat-ai-api.service';
import {DataService} from "../_services/data.service";
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit{

  userMessage !: string;
  botMessage !: string;
  chatHistory: {role: string, content: string}[] = [];
  threadsArray!: Observable<string>[];
  latestThread !: Observable<any>[];

  constructor(private aiService: ChatAiApiService,
              private dataService: DataService,
  private router: Router){
   // this.dataService.getResponseData().subscribe(data => console.log('User Object is ', data))
  }

  ngOnInit() {
    this.dataService.getResponseData().subscribe(data => {

    if (!data) {
      this.router.navigate(['account/login']);
    }

  })
  }

  getUserProfile(): void {
    this.aiService.getUser("661e97780635815ce1c14eb5")
      .subscribe(res => {
        if (!res) {
          this.router.navigate(['account/login']);
        }
        this.threadsArray = res.threads;
        const latestThreadId = this.threadsArray[0];
        console.log("here's the threads array" + this.threadsArray);
        this.getLatestThread(res.threads[0]);
      });
  }

  getLatestThread(threadsId: string): void {
    this.aiService.getAllMessagesInThread(threadsId)
        .subscribe(res => {
          console.log("res from get latest thread: " + JSON.stringify(res));
          const messageObjectArray = res.data;
          let message = {};

        })
  }
  sendMessage() {
    const userMessage = this.userMessage;
    this.chatHistory.push({role: 'user', content: userMessage});
    // this.aiService.sendMessage("661e97780635815ce1c14eb5", this.userMessage)
    //     .subscribe(res => {
    //       this.botMessage = res.reply;
    //       this.chatHistory.push({role: 'assistant', content: this.botMessage});
    //       this.userMessage = '';
    //     });
  }
}
