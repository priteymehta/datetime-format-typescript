import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = '';
  date = new Date();
  aaaa = this.date.getUTCFullYear();
  gg: any = this.date.getUTCDate();
  mm: any = this.date.getUTCMonth() + 1;

  ngOnInit() {
    //console.log(this.getFileName());
    this.name = 'datetime format: ' + this.getFileName();
  }
  getFileName() {
    if (this.gg < 10) {
      this.gg = '0' + this.gg;
    }
    if (this.mm < 10) this.mm = '0' + this.mm;
    var cur_day = this.aaaa + '' + this.mm + '' + this.gg;
    var hours: any = this.date.getUTCHours();
    var minutes: any = this.date.getUTCMinutes();
    var seconds: any = this.date.getUTCSeconds();

    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    return cur_day + '_' + hours + '' + minutes + '' + seconds;
  }
}
