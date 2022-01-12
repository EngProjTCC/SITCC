import { Component, OnInit } from '@angular/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPluguin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/pt';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  public events: any[];
  public options: any;

  constructor() { }

  ngOnInit(): void {

    this.options = {
      plugins: [dayGridPlugin, timeGridPluguin, interactionPlugin],
      defaulDate: new Date(),
      locale: esLocale,
      header:{
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      editable: false
    }

    this.events = [
      {
        title: "Apresentação de Roberth",
        start: new Date(),
        description: "Apresentação de Roberth"
      },
      {
        title: "Apresentação de João",
        start: new Date(new Date().getTime() + 86400000),
        description: "Apresentação de João"
      },
      {
        title: "Apresentação de Mateus",
        start: new Date(new Date().getTime() + 86400000 * 2),
        end: new Date(new Date().getTime() + (86400000 * 3)),
        description: "Apresentação de Mateus"
      },
    ]
  }

}
