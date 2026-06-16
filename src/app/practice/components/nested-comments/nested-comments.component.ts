import { Component } from '@angular/core';

type CommentNode = { id: string; text: string; replies: CommentNode[]; reply?: string };

@Component({
  selector: 'app-practice-nested-comments',
  templateUrl: './nested-comments.component.html',
  styleUrls: ['./nested-comments.component.css']
})
export class NestedCommentsComponent {
  comments: CommentNode[] = [
    { id: '1', text: 'This is the first comment.', replies: [{ id: '2', text: 'This is a reply.', replies: [] }] },
    { id: '3', text: 'This is another comment.', replies: [] }
  ];

  addReply(comment: CommentNode): void {
    if (!comment.reply?.trim()) return;
    comment.replies.push({ id: crypto.randomUUID(), text: comment.reply.trim(), replies: [] });
    comment.reply = '';
  }
}
