export class Recipe {
    id: number;
    brewingMethod: string;
    waterWeight: number;
    concentration: number;
    grindSize: number;

    constructor(id, brewingMethod, waterWeight, concentration, grindSize) {
        this.id = id;
        this.brewingMethod = brewingMethod;
        this.waterWeight = waterWeight;
        this.concentration = concentration;
        this.grindSize = grindSize;
    }
}
