import { Component, OnInit } from '@angular/core';
import {AllCoursesService} from '../all-courses.service'
import { environment } from 'src/environments/environment';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss']
})
export class AllCoursesComponent implements OnInit {
  courses: any;
  closeResult = '';
  clicked = false;


  constructor( private AllCoursesService: AllCoursesService,private modalService: NgbModal )
     { }

     ngOnInit() {
      this.AllCoursesService.getService().subscribe((res) => {
        this.courses = res;
      });
  }

  open(content:any,) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = '';
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}