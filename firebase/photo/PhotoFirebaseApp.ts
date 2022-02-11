import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { Photo } from "../../types/photo/Photo";
import { PhotoRepository } from "../../types/photo/PhotoRepository";
import { PhotoStorage } from "../../types/photo/PhotoStorage";
import { PhotoRepositoryFirebase } from "./PhotoRepositoryFirebase";
import { PhotoStorageFirebase } from "./PhotoStorageFirebase";

export class PhotoFirebaseApp {
  private readonly storage: PhotoStorage;
  private readonly db: PhotoRepository;
  constructor(private readonly config: FirebaseOptions) {
    const app = initializeApp(this.config);

    const firebaseStorage = getStorage(app);
    this.storage = new PhotoStorageFirebase(firebaseStorage);

    const firestore = getFirestore(app);
    this.db = new PhotoRepositoryFirebase(firestore);
  }

  async listAll(): Promise<Photo[]> {
    const photos = await this.db.listAll()
    return photos;
  }

  async upload(file: File): Promise<void> {
    const photoUrl = await this.storage.upload(file.name, file);
    const [name] = file.name.split(".");

    const createPhoto = new Photo({
      name: name,
      size: file.size,
      url: photoUrl,
      ref: file.name
    })

    await this.db.save(createPhoto);
  }

  async download(url: string) {
    await this.storage.download(url)
  }

  async remove(photo: Photo) {
    if (photo.id) {
      await this.db.remove(photo.id)
      await this.storage.remove(photo.name)
    }
  }
}
