export class LineData {
  name: string = "Chiffre d'affaire";
  series!: SeriesData[];
}

export class SeriesData {
  name!: string;
  chiffre_affaire!: number;
  month?: number;
  year?: number;
}
