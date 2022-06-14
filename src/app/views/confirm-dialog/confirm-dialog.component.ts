import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  id: string;
  title: string;
  mensaje: string;
  pid: any;

  @Output() hide = new EventEmitter<boolean>()

  constructor(public dialogo: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit(): void {
      this.id = this.data.id;
      this.title = this.data.title;
      this.pid = this.data.pid;
      this.mensaje = this.data.mensaje;
    }

    cerrarDialogo(): void {
      this.dialogo.close(false);
      // this.hide.emit(false);
    }

    confirmado(): void {
      this.dialogo.close(true);
      // this.hide.emit(true);
    }

}
