import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnChanges, OnInit, OnDestroy {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = false;
  @Input()
  label = 'No label';
  separatorKeysCodes: number[] = [ENTER, COMMA];
  itemCtrl = new FormControl();
  filteredItems: Observable<string[]>;
  selectedItems: string[] = [];
  @Input() formCtrl: FormControl;

  @Input()
  suggestItems: string[] = [];

  @ViewChild('itemInput') itemInput: ElementRef;

  private formCtrlValueChangesSubcription: Subscription;

  constructor() {
    this.filteredItems = this.itemCtrl.valueChanges.pipe(
      startWith(null),
      map((item: string | null) => item ? this._filter(item) : this.suggestItems.slice())
    );
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.selectedItems.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.itemCtrl.setValue(null);
    this._updateSelectedItemsChange();
  }

  remove(item: string): void {
    const index = this.selectedItems.indexOf(item);

    if (index >= 0) {
      this.selectedItems.splice(index, 1);
    }
    this._updateSelectedItemsChange();
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedItems.push(event.option.viewValue);
    this.itemInput.nativeElement.value = '';
    this.itemCtrl.setValue(null);
    this._updateSelectedItemsChange();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.suggestItems.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }

  private _updateSelectedItemsChange() {
    // emmit ra một copy của mảng- đm, fix mấy mấy tiếng.
    this.formCtrl.setValue(this.selectedItems.slice());
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.itemCtrl.setValue(this.itemCtrl.value);
  }

  ngOnInit(): void {
    this.formCtrlValueChangesSubcription =
      this.formCtrl.valueChanges.subscribe(val => {
        this.selectedItems = val;
        console.log(val);
      });
    this.formCtrl.setValue(this.formCtrl.value);
  }

  ngOnDestroy(): void {
    this.formCtrlValueChangesSubcription.unsubscribe();
  }

}
