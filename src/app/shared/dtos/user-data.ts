import {Recipe} from './recipe';

export class UserData {
    recipes: Array<Recipe> = [];

    constructor(recipes: Array<Recipe>) {
        recipes.forEach(r => {
            this.recipes.push(r);
        });
    }
}
