import { Component } from '@angular/core';
import { MessageService } from '../../messages.service';

@Component({
    selector: 'app-messages',
    template: `
    <div class="message-component" *ngIf="open">

        <div class="message-header">
            <h2>Messages</h2>
            <div class="message-button-wrapper">
                <button class="hide"
                        (click)="toggleVisible()">Hide</button>
                <button class="clear"
                        (click)="messageService.clear()">Clear</button>
            </div>
        </div>

        <div class="message"*ngFor='let message of messageService.messages'> {{message}} </div>
       
    </div>
    <div class="message-component-minified" *ngIf="!open"
         (click)="toggleVisible()">
         <p>+</p>

    </div>
    `,
    styleUrls: ['./messages.component.less']

})

export class MessagesComponent {
    private open: boolean = false;

    constructor(public messageService: MessageService) {

    }

    toggleVisible(): void {
        if (this.open) {
            this.open = false;
        }
        else {
            this.open = true;
        }
    }

}