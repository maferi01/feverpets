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

export interface IListPet{
  urlFirst:string;
  urlLast:string;
  urlPrev:string;
  urlNext:string;
  urlCurrent:string;
  list:IPet[];
}