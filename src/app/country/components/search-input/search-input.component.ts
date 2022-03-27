import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  @Output() 
  onEnter: EventEmitter<string> = new EventEmitter();
  
  @Output()
  onDebounce: EventEmitter<string> = new EventEmitter();

  @Input()
  placeholder: string = 'Buscar...';

  debouncer: Subject<string> = new Subject();

  term: string = '';

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe( value => {
        this.onDebounce.emit( value );
      });
  }

  search() {
    this.onEnter.emit( this.term );
  }

  keyPressed() {
    this.debouncer.next( this.term );
  }
  

}
