import { Component } from '@angular/core';
import {StorageService} from '../shared/services/storage.service';
import {Recipe} from '../shared/dtos/recipe';
import {UserData} from '../shared/dtos/user-data';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private storageService: StorageService) {}

  grounds: number;
  ratio: number;
  userData: UserData;

  ionViewWillEnter() {
    // const recipes: Array<Recipe> = [new Recipe(1, 'chemex', 600, 15, 4.5)];
    // const userData: UserData = new UserData(recipes);
    // this.storageService.setStorage('userData', userData);
    this.ratio = 12;
    this.storageService.getStorage('userData').then(value => this.userData = value);
  }
}


