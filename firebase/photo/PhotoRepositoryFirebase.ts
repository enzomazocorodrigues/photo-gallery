import { Photo } from "../../types/photo/Photo";
import { PhotoRepository } from "../../types/photo/PhotoRepository";
import { addDoc, collection, deleteDoc, doc, Firestore, getDocs, query, where } from "firebase/firestore"

export class PhotoRepositoryFirebase implements PhotoRepository {
  private readonly collection: string = "photos"

  constructor(private readonly firestore: Firestore) { }

  async listAll(): Promise<Photo[]> {
    const photosCollection = collection(this.firestore, this.collection);
    const photosDocs = await getDocs(photosCollection);
    const photos: Photo[] = photosDocs.docs
      .map(doc => {
        const docData = doc.data()
        return new Photo({
          id: doc.id,
          name: docData.name,
          size: docData.size,
          url: docData.url,
          ref: docData.ref
        })
      })

    return photos;
  }

  async save(photo: Photo): Promise<void> {
    const docRef = await addDoc(collection(this.firestore, this.collection), {
      name: photo.name,
      size: photo.size,
      url: photo.url,
      ref: photo.ref,
    });
  }

  async remove(id: string): Promise<void> {
    await deleteDoc(doc(this.firestore, this.collection, id));
  }
}
