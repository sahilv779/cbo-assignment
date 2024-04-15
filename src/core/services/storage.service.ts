import {StorageMap} from '@ngx-pwa/local-storage';
import {Injectable} from '@angular/core';
import {firstValueFrom, Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private storage: StorageMap) {
  }

  async getItem(key: string): Promise<any> {
    return firstValueFrom(this.storage.get(key));
  }

  async setItem(key: string, value: any) {
    return firstValueFrom(this.storage.set(key, value));
  }

  async clearItem(key: string) {
    return firstValueFrom(this.storage.delete(key));
  }

  async clearAll() {
    return firstValueFrom(this.storage.clear());
  }

  watch(key: string): Observable<any> {
    return this.storage.watch(key);
  }

  async resetAppData() {

  }
}
