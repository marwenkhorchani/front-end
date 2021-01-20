import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from './../../../services/announcement.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css'],
})
export class AnnouncementsComponent implements OnInit {
  displayModal: boolean = false;
  ann: any;
  method: any;
  announcements: any;
  constructor(private service: AnnouncementService) {}

  ngOnInit(): void {
    this.service.findAll().subscribe((res) => {
      this.announcements = res;
    });
  }

  edit() {}

  toggleModal(method: string, ann: any) {
    this.displayModal = true;
    this.method = method;
    this.ann = ann;
  }

  delete() {
    this.service.deleteOne(this.ann._id).subscribe((res) => {
      this.announcements = res;
      this.displayModal = false;
    });
  }

  add(f: any) {
    let obj = {
      text: f.form.value.body,
      date: new Date(),
    };
    this.service.add(obj).subscribe((res) => {
      this.announcements.push(res);
      this.displayModal = false;
    });
  }
}
