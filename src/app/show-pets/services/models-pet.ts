export interface IPet {
  id: number;
  name: string;
  kind: string;
  weight: number;
  height: number;
  length: number;
  photo_url: string;
  description: string;
}

export interface IPetDetail extends IPet {
  healthy: HealthLevel;
}
export interface IListPet {
  urlFirst: string;
  urlLast: string;
  urlPrev: string;
  urlNext: string;
  urlCurrent: string;
  list: IPet[];
}

export enum HeadersPet {
  NAME = "name",
  KIND = "kind",
  LENGTH = "length",
  WEIGHT = "weight",
  HEIGHT = "height"
}

export enum HealthLevel {
  UNHEALTHY = "unhealthy", // below 2 or over 5
  HEALTHY = "healthy", //between 3 and 5
  VERY_HEALTHY = "healthy" // between 2 and 3
}
