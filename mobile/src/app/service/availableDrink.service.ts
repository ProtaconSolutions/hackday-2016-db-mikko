import { IOrder, OrdersService } from './orders.service';
import { Injectable } from '@angular/core';

export interface ISelectedIncredient {
    name: string,
    selected?: boolean;
}

export interface IDrinkRecipe {
    name: string,
    incredients: string[],
    recipe: IOrder
} 

@Injectable()
export class AvailableDrinkService {
    constructor() {}

    public incredients: ISelectedIncredient[] = [
        { name: 'Jallu' },
        { name: 'Maito' },
        { name: 'Maltaat' }
    ]

    private recipes: IDrinkRecipe[] = [
        {
            name: 'Jallumaito',
            incredients: ['Jallu', 'Maito'],
            recipe: {
                recipe: [0, 5, 5, 0]
            }
        },
        {
            name: 'Olut',
            incredients: ['Maltaat'],
            recipe: {
                recipe: [10, 0, 0, 0]
            }
        }
    ]

    private isIncredientSelected(incredient: string): boolean {
        return this.incredients.filter(x => x.name == incredient && x.selected).length !== 0;
    }

    public getAvailableRecipes(): IDrinkRecipe[] {
        return this.recipes.filter(recipe => recipe.incredients
            .find(incredient => this.isIncredientSelected(incredient)));
    }
}