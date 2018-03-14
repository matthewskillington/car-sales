import { Component } from '@angular/core';
import { MessageService } from '../../services/messages.service';
import { CommService } from '../../services/communication.service';

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
                <button class="floodDb"
                        (click)="carService.floodDb()">FloodDb</button>
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

    constructor(public messageService: MessageService, private carService: CommService) {

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