// Generated by https://quicktype.io

export interface Recipe {
    _id:         string;
    ingredients: IngredientQuantity[];
    name:        string;
}

export interface IngredientQuantity {
    _id: string;
    qte:   number;
}