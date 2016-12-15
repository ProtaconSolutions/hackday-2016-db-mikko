import { Injectable } from '@angular/core';

export interface ISelectedIncredient {
    name: string,
    selected?: boolean;
}

export interface IDrinkRecipe {
    name: string,
    incredients: string[],
} 

@Injectable()
export class AvailableDrinkService {
    public incredients: ISelectedIncredient[] = [
        { name: 'Jallu' },
        { name: 'Maito' },
        { name: 'Maltaat' }
    ]

    private recipes: IDrinkRecipe[] = [
        {
            name: 'Jallumaito',
            incredients: ['Jallu', 'Maito']
        },
        {
            name: 'Olut',
            incredients: ['Maltaat']
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