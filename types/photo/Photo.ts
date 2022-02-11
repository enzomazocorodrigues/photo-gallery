export type CreatePhotoPayload = {
  id?: string;
  name: string;
  url: string;
  ref: string;
  size: number;
}

export class Photo {
  public id?: string
  public name: string;
  public url: string;
  public size: number;
  public ref: string;
  public date: Date;

  constructor(payload: CreatePhotoPayload) {
    this.id = payload.id
    this.name = payload.name
    this.url = payload.url
    this.size = payload.size
    this.ref = payload.ref
    this.date = new Date()
  }
}
