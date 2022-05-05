import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Tartiflette Sauvagine', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'https://www.seriouseats.com/thmb/tHd_zxcsT8t4kWqgtHt6b-T8HL8=/880x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20220201-tartiflette-vicky-wasik-33-1387b0975ce0466d86c83ea6a8f75cd9.jpg'),
    new Recipe('Joue de boeuf braisée', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci sagittis eu volutpat odio facilisis mauris sit amet. Lectus magna fringilla urna porttitor rhoncus dolor purus. Pretium lectus quam id leo in. Quis lectus nulla at volutpat diam ut. Leo urna molestie at elementum eu facilisis. Lobortis scelerisque fermentum dui faucibus in.', 'https://images.lpcdn.ca/924x615/200904/16/64053-joues-veau-braisees-sauce-cacao.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
