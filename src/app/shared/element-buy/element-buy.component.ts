import { Component, Inject, OnInit } from '@angular/core';
import { CryptoElement } from 'src/app/models/CryptoElement';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-element-buy',
  templateUrl: './element-buy.component.html',
  styleUrls: ['./element-buy.component.scss']
})
export class ElementBuyComponent implements OnInit {
  element!: CryptoElement;
  isChange!: boolean

  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: CryptoElement,
    public dialogRef: MatDialogRef<ElementBuyComponent>,
  ) {}


  ngOnInit(): void {
    console.log(this.data)
    if(this.data.id != null){
      this.isChange = true;
    } else {
      this.isChange = false;
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
