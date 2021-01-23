import { Component, Inject, OnInit, Input } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';

@Component({
  selector: 'app-table-students',
  templateUrl: './table-students.component.html',
  styleUrls: ['./table-students.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class TableStudentsComponent implements OnInit {
  @Input() dataSource: [] | any;
  // @ts-ignore
  columnsToDisplay = ['username', 'email', 'class', 'cin'];
  expandedElement: null;

  constructor(public dialog: MatDialog) {}
  openDialog(data?: any): void {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      width: '700px',
      height: '750px',
      data,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  ngOnInit(): void {
    console.log(this.dataSource);
  }
}
