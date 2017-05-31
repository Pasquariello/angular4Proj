import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Message } from "./message.model";
import { MessageService } from "./message.service";

@Component({
  // this will be the new tag, make sure not to overwrite something existing
  selector: 'app-message',
  templateUrl: './message.component.html',
  styles: [`
    .author {
      display: inline-block;
      font-style: italic;
      font-size: 12px;
      width: 80%
    }
    .config {
      display: inline-block;
      text-align: right;
      font-size: 12px;
      width: 19%;
    }
  `]
})

export class MessageComponent {
  //this allow me to pass argument in template
  @Input() message: Message;
  @Output() editClicked = new EventEmitter<string>();

constructor(private messageService: MessageService) {}

  onEdit() {
  this.editClicked.emit('A New Value');
  console.log('button hit')
  }

  onDelete() {
    this.messageService.deleteMessage(this.message);
  }
}
