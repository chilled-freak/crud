import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { Item } from '../../models/items';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[];
  editState: boolean = false;
  itemToEdit: Item;

  constructor(private itemService: ItemsService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(items => {
      console.log(items);
      this.items = items;
    });
  }

  update(item: Item) {
    this.itemService.updateItem(item);
    this.clearState();
  }

  delete(event, item : Item) {
    this.clearState();
    this.itemService.delete(item);
  }

  edit(event, item) {
    this.editState = true;
    this.itemToEdit = item;
  }

  clearState(){
    this.editState = false;
    this.itemToEdit = null;
  }
} 
