import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Tartiflette Sauvagine', 'Fromage du terroir', 'https://www.seriouseats.com/thmb/tHd_zxcsT8t4kWqgtHt6b-T8HL8=/880x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20220201-tartiflette-vicky-wasik-33-1387b0975ce0466d86c83ea6a8f75cd9.jpg'),
    new Recipe('Joue de boeuf braisée', 'Boeuf du terroir', 'https://images.lpcdn.ca/924x615/200904/16/64053-joues-veau-braisees-sauce-cacao.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
