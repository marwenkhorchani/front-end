import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../services/announcement.service';
import * as moment from 'moment';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css'],
})
export class AnnouncementsComponent implements OnInit {
  x: any;
  y: any;
  displayModal: boolean = false;
  ann: any;
  method: any;
  announcements: any;
  role = localStorage.getItem('role');
  constructor(private service: AnnouncementService) {}

  ngOnInit(): void {
    this.service.findAll().subscribe((res: any) => {
      this.announcements = res.sort((a: any, b: any) => {
        this.x = new Date(b.date);
        this.y = new Date(a.date);
        return this.x - this.y;
      });
    });
  }

  edit(f: any) {
    var obj = {
      text: f.form.value.body,
      date: 'Edited ' + new Date(),
    };

    this.service.update(obj, this.ann._id).subscribe((res: any) => {
      this.announcements = res.sort((a: any, b: any) => {
        this.x = new Date(b.date);
        this.y = new Date(a.date);
        return this.x - this.y;
      });
      this.displayModal = false;
    });
  }

  toggleModal(method: string, ann: any) {
    this.displayModal = true;
    this.method = method;
    this.ann = ann;
  }

  delete() {
    this.service.deleteOne(this.ann._id).subscribe((res: any) => {
      this.announcements = res.sort((a: any, b: any) => {
        this.x = new Date(b.date);
        this.y = new Date(a.date);
        return this.x - this.y;
      });
      this.displayModal = false;
    });
  }

  add(f: any) {
    let obj = {
      text: f.form.value.body,
      date: 'Posted ' + new Date(),
    };
    this.service.add(obj).subscribe((res) => {
      this.announcements.unshift(res);
      this.displayModal = false;
    });
  }

  convertTime(date: any) {
    return moment(date.slice(7, date.length)).fromNow();
  }
}
