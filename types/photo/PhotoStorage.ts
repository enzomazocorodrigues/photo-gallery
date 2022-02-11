import { Photo } from "./Photo";

export interface PhotoStorage {
  download(path: string): Promise<void>
  upload(path: string, file: File): Promise<string>
  remove(path: string): Promise<void>
}
