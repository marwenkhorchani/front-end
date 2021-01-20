import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from './../../../services/announcement.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css'],
})
export class AnnouncementsComponent implements OnInit {
  displayModal: boolean = false;
  id: any;
  announcements: any;
  constructor(private service: AnnouncementService) {}

  ngOnInit(): void {
    this.service.findAll().subscribe((res) => {
      this.announcements = res;
    });
  }

  edit(id: string) {
    console.log(id);
  }

  toggleModal(id: string) {
    this.displayModal = true;
    this.id = id;
  }

  delete() {
    this.service.deleteOne(this.id).subscribe((res) => {
      this.announcements = res;
      this.id = null;
      this.displayModal = false;
    });
  }

  add(f: any) {
    let obj = {
      text: f.form.value.body,
      date: new Date(),
    };
    this.announcements.push(obj);
    this.displayModal = false;
  }
}
