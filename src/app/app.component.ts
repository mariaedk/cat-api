import { CatService } from './cat.service';
import { Cat } from './cat.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ellipsis';
  page = 1;
  cats: Cat[] = [];

  constructor(private catService: CatService) {}

  ngOnInit(): void {
    this.catService
       .getCats(this.page)
       .subscribe((cats: Cat[]) => {
          this.cats = cats;
       });
  }

  onScroll(): void {
    this.catService
      .getCats(++this.page)
      .subscribe((cats: Cat[]) => {
        this.cats.push(...cats);
      });
  }
}
