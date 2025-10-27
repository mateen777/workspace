import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, TemplateRef, viewChild } from '@angular/core';
import {tuiClamp, TuiSwipe, type TuiSwipeEvent} from '@taiga-ui/cdk';
import {TuiMessage, TuiPreview, TuiPreviewDialogService} from '@taiga-ui/kit';
import { PolymorpheusContent, PolymorpheusOutlet } from '@taiga-ui/polymorpheus';
import { TuiDialogContext } from '@taiga-ui/core';

@Component({
  selector: 'app-chat-container',
  imports: [CommonModule,TuiMessage,PolymorpheusOutlet, TuiPreview, TuiSwipe],
  templateUrl: './chat-container.html',
  styleUrl: './chat-container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatContainer {
  mockMessages = [
  {
    id: 1,
    senderId: 'user_1',
    senderName: 'Mateen',
    content: 'Hey! 👋 How are you doing today?',
    type: 'text',
    timestamp: '2025-10-21T10:15:00Z',
    isMine: true,
  },
  {
    id: 2,
    senderId: 'user_2',
    senderName: 'Sara',
    content: "Hi Mateen! 😊 I'm good. How about you?",
    type: 'text',
    timestamp: '2025-10-21T10:16:10Z',
    isMine: false,
  },
  {
    id: 3,
    senderId: 'user_1',
    senderName: 'Mateen',
    content: "I'm doing great, just testing the new chat UI 🎨",
    type: 'text',
    timestamp: '2025-10-21T10:17:05Z',
    isMine: true,
  },
  {
    id: 4,
    senderId: 'user_2',
    senderName: 'Sara',
    content: 'Looks awesome so far! 😍',
    type: 'text',
    timestamp: '2025-10-21T10:17:40Z',
    isMine: false,
  },
  {
    id: 5,
    senderId: 'user_1',
    senderName: 'Mateen',
    content: 'https://picsum.photos/300/200',
    type: 'image',
    timestamp: '2025-10-21T10:18:10Z',
    isMine: true,
  },
  {
    id: 6,
    senderId: 'user_2',
    senderName: 'Sara',
    content: 'Wow, nice picture! 📸',
    type: 'text',
    timestamp: '2025-10-21T10:18:45Z',
    isMine: false,
  },
  {
    id: 7,
    senderId: 'system',
    senderName: 'System',
    content: 'Sara joined the chat 💬',
    type: 'system',
    timestamp: '2025-10-21T10:19:00Z',
    isMine: false,
  },
  {
    id: 8,
    senderId: 'user_1',
    senderName: 'Mateen',
    content: 'Typing animation test...',
    type: 'text',
    timestamp: '2025-10-21T10:20:30Z',
    isMine: true,
    isTyping: true,
  },
  {
    id: 9,
    senderId: 'user_2',
    senderName: 'Sara',
    content: 'Let’s test reactions 👍❤️😂',
    type: 'text',
    timestamp: '2025-10-21T10:21:15Z',
    isMine: false,
    reactions: [
      { emoji: '👍', count: 2 },
      { emoji: '❤️', count: 1 },
    ],
  },
  {
    id: 10,
    senderId: 'user_1',
    senderName: 'Mateen',
    content: 'Great! Let’s wrap this test 🧩',
    type: 'text',
    timestamp: '2025-10-21T10:22:05Z',
    isMine: true,
  },
];

  messages = this.mockMessages.slice(0,2);

  formatTime(timestamp: string): string {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  private readonly previewService = inject(TuiPreviewDialogService);
  
  protected readonly preview? = viewChild<TemplateRef<TuiDialogContext>>('preview');
  
  protected index = 0;
  protected length = 2;
  protected titles = ['Transaction cert.jpg', 'My face.jpg'];
 
    protected get previewContent(): PolymorpheusContent {
        return 'https://avatars.githubusercontent.com/u/10106368';
    }
 
    protected show(): void {
        this.previewService.open(this.preview || '').subscribe({
            complete: () => console.info('complete'),
        });
    }
 
    protected download(): void {
        
    }
 
    protected delete(): void {
        
    }
 
    protected onSwipe(swipe: TuiSwipeEvent): void {
        if (swipe.direction === 'left') {
            this.index = tuiClamp(this.index + 1, 0, this.length - 1);
        }
 
        if (swipe.direction === 'right') {
            this.index = tuiClamp(this.index - 1, 0, this.length - 1);
        }
    }

 }
