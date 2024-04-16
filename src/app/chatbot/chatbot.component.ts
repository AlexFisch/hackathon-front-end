import { Component } from '@angular/core';
import { ChatAiApiService } from '../service/chat-ai-api.service'

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent {

  userMessage !: string;
  botMessage !: string;
  chatHistory: {role: string, content: string}[] = [];

  constructor(private aiService: ChatAiApiService){}

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
