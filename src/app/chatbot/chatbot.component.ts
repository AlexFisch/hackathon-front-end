import {Component, OnInit} from '@angular/core';
import { ChatAiApiService } from '../service/chat-ai-api.service';
import {DataService} from "../_services/data.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements  OnInit{

  userMessage !: string;
  botMessage !: string;
  chatHistory: {role: string, content: string}[] = [];

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

  sendMessage() {
    const userMessage = this.userMessage;
    this.chatHistory.push({role: 'user', content: userMessage});
    this.aiService.sendMessage(this.userMessage)
        .subscribe(res => {
          this.botMessage = res.reply;
          this.chatHistory.push({role: 'assitant', content: this.botMessage});
          this.userMessage = '';
        });
  }
}
