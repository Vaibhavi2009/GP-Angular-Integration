import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() item!: Item;
  @Output() remove = new EventEmitter<void>();

  editable = false;

  get safeId(): string {
    return 'todo-' + (this.item?.description || '')
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9\-_]/g, '');
  }

  saveItem(newDescription: string) {
    const d = (newDescription || '').trim();
    if (!d) return;
    this.item.description = d;
    this.editable = false;
  }
}
