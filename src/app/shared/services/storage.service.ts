import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import {Recipe} from '../dtos/recipe';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  setStorage(key: any, value: any) {
    this.storage.set(key, value);
  }

  getStorage(key) {
    return this.storage.get(key).then(obj => obj);
  }
}
