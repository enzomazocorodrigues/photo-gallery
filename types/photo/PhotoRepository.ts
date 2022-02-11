import { Photo } from "./Photo";

export interface PhotoRepository {
  listAll(): Promise<Photo[]>
  save(photo: Photo): Promise<void>
  remove(id: string): Promise<void>
}
