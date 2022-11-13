import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  nome!: string ;
  fabricante!: string ;
  descri!: string ;
  comple!: string ;
  valorProduto!: number ;

  constructor() { }

  ngOnInit(): void {}

  salvarProduto(): void {

    console.log('Nome: ', this.nome);
    console.log('fabricante: ', this.fabricante);
    console.log('descri: ', this.descri);
    console.log('comple: ', this.comple);
    console.log('Preço: ', this.valorProduto);
    alert('Salvo com sucesso!');


  }

}
