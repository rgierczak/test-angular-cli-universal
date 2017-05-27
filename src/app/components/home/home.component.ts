import { Component, OnInit } from '@angular/core';
import {
    trigger,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [
        trigger('opacityState', [
            transition(':enter', [
                style({
                    opacity: 0
                }),
                animate(300)
            ]),
            transition(':leave', animate(300, style({
                opacity: 0
            })))
        ])
    ]
})
export class HomeComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
