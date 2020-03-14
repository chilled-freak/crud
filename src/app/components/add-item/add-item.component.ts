import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { Item } from '../../models/items'

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})

export class AddItemComponent implements OnInit {

  item: Item = {
    title: '',
    description: ''
  }

  constructor(private itemService : ItemsService) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.item.title != '' && this.item.description != ''){
      this.itemService.addItem(this.item);
    }
    
  }

}
