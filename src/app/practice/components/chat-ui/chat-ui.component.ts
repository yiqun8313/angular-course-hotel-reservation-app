import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-chat-ui',
  templateUrl: './chat-ui.component.html',
  styleUrls: ['./chat-ui.component.css']
})
export class ChatUiComponent {
  messages = [{ role: 'assistant', text: 'Hi, how can I help you?' }];
  chatInput = '';
  replying = false;

  sendMessage(): void {
    const text = this.chatInput.trim();
    if (!text || this.replying) return;
    this.messages.push({ role: 'user', text });
    this.chatInput = '';
    this.replying = true;
    setTimeout(() => {
      this.messages.push({ role: 'assistant', text: `You said: "${text}"` });
      this.replying = false;
    }, 800);
  }
}
