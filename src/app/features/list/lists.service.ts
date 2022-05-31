import { Injectable } from '@angular/core';
import { List } from './list.model';

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  private lists: List[] = [new List("1", "Favorites")];

  constructor() { }

  public getAll(): List[] {
    return this.lists.slice();
  }

  public getById(id: string): List | undefined {
    return this.lists.find(item => item.id === id);
  }
}
