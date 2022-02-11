import axios from "axios";
import { deleteObject, FirebaseStorage, getDownloadURL, getStorage, listAll, ref, uploadBytes } from "firebase/storage";
import { PhotoStorage } from "../../types/photo/PhotoStorage";

export class PhotoStorageFirebase implements PhotoStorage {
  constructor(private readonly storage: FirebaseStorage) { }

  private async imageURL(path: string): Promise<string> {
    try {
      const storageRef = ref(this.storage, path);
      const url = await getDownloadURL(storageRef)
      return url
    } catch (err) {
      throw err;
    }
  }

  public async download(url: string): Promise<void> {
    try {
      const blob = await axios.get(url)
      console.log(blob)
    } catch (err) {
      throw err;
    }
  }

  public async upload(path: string, file: File): Promise<string> {
    try {
      const storageRef = ref(this.storage, path);
      await uploadBytes(storageRef, file)
      const url = await this.imageURL(path);
      return url
    } catch (err) {
      throw err;
    }
  }

  public async remove(path: string): Promise<void> {
    const storageRef = ref(this.storage, path);
    await deleteObject(storageRef);
  }
}
