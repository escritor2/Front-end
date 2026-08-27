import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [],
  templateUrl: './card-product.html',
  styleUrl: './card-product.css'
})
export class CardProduct {
  @Input() titulo = 'Produto';
  @Input() descricao = 'Descrição do produto.';
  @Input() preco = 'R$ 0,00';
}
