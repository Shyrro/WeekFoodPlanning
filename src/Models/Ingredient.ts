export interface IngredientModel {
  _id: string;
  name: string;
  unit: string;
  color: string;
}

class Ingredient implements IngredientModel {
  _id: string;
  name: string;
  unit: string;
  color: string;

  constructor(ingredient: IngredientModel) {
    this._id = ingredient._id;
    this.name = ingredient.name;
    this.unit = ingredient.unit;
    this.color = ingredient.color;
  }

}

export { Ingredient };
