import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GoogleStorageService {
  private bucketName = 'camping-montacabana-prod.appspot.com';
  private apiUrl = `https://firebasestorage.googleapis.com/v0/b/${this.bucketName}/o`;

  constructor(private http: HttpClient) {}

  getFileDetails(fileName: string): Observable<any> {
    const url = `${this.apiUrl}/${encodeURIComponent(fileName)}?alt=json`;
    return this.http.get(url);
  }
  
  async getDownloadUrl(fileName: string): Promise<string> {
    try {
      const fileDetails = await firstValueFrom(this.getFileDetails(fileName));
      return `${this.apiUrl}/${encodeURIComponent(fileDetails.name)}?alt=media&token=${fileDetails.downloadTokens}`;
    } catch (error) {
      console.error('Erreur lors de la récupération depsuis firebasestorage du fichier:', error);
      throw error;
    }
  }
  
}
