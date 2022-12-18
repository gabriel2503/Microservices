import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { ClienteCrypto } from 'src/app/models/ClienteCrypto';
import { CarteiraCryptoElementService } from 'src/app/services/carteiraCryptoElement.service';
import { ElementSellComponent } from 'src/app/shared/element-sell/element-sell.component';

// export interface CarteiraCryptoElement {
//   position: number;
//   codigo: string;
//   nome: string;
//   cotacao_compra: number;
//   cotacao_venda: number;
//   variacao: number;
//   quantidade: number
// }

// const CARTEIRA_DATA: CarteiraCryptoElement[] = [
//   {position: 1, codigo: 'BTC', nome: 'Bitcoin', cotacao_compra: 1.0079, cotacao_venda: 1.0079, variacao: 0.25, quantidade: 150},
//   {position: 2, codigo: 'ETH', nome: 'Ethereum', cotacao_compra: 4.0026, cotacao_venda: 4.0026, variacao: 0.25, quantidade: 300},
//   {position: 3, codigo: 'USDT', nome: 'Tether', cotacao_compra: 6.941, cotacao_venda: 6.941, variacao: 0.25, quantidade: 400},
// ];

@Component({
  selector: 'app-carteira',
  templateUrl: './carteira.component.html',
  styleUrls: ['./carteira.component.scss'],
  providers: [CarteiraCryptoElementService]
})
export class CarteiraComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>;
  displayedColumns: string[] = [ 'codigo', 'nome', 'cotacao_compra', 'cotacao_venda', 'quantidade', 'vender'];
  dataSource!: ClienteCrypto[];
 
  constructor(public dialog: MatDialog, 
    private router: Router,
    public carteiraCryptoElementService: CarteiraCryptoElementService
    ) {
      this.carteiraCryptoElementService.getClienteCrypto(1)
      .subscribe((data: ClienteCrypto[]) => {
        this.dataSource = data;
      })
    }


  ngOnInit(): void {
  }

  navigateToHome(){
    this.router.navigate(["home"]);
  }


  openDialog(element: ClienteCrypto | null): void {
    const dialogRef = this.dialog.open(ElementSellComponent, {
      width: '250px',
      data: element === null ? {
        position: null,
        codigo: null,
        nome: null,
        valorCompra: null,
        valorVenda: null,
        quantidade: null

       } : {
        position: element.position,
        codigo: element.crypto.codigo,
        nome: element.crypto.nome,
        valorCompra: element.crypto.valorCompra,
        valorVenda: element.crypto.valorVenda,
        quantidade: element.quantidade
       } 
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined) {
      //  if (this.dataSource.map(p => p.position).includes(result.position)){
     //     this.dataSource[result.position - 1] = result;
      //    this.table.renderRows();
      //  } else {
          this.carteiraCryptoElementService.vendaCrypto(result)
          .subscribe((data: ClienteCrypto)=> {
            this.dataSource.push(result);
            this.table.renderRows();
        }
        )
      }
    });
  }

  deleteElement(position: number): void{
    this.dataSource = this.dataSource.filter(p=> p.position !== position)
  }

  sellElement(element: ClienteCrypto): void{
    this.openDialog(element);
  }
  }
