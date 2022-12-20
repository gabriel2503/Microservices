import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClienteCrypto } from 'src/app/models/ClienteCrypto';

@Component({
  selector: 'app-element-sell',
  templateUrl: './element-sell.component.html',
  styleUrls: ['./element-sell.component.scss']
})
export class ElementSellComponent implements OnInit {
  element!: ClienteCrypto;
  isChange!: boolean

  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: any,
    public dialogRef: MatDialogRef<ElementSellComponent>,
  ) {}


  ngOnInit(): void {
    if(this.data.position != null){
      this.isChange = true;
    } else {
      this.isChange = false;
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
