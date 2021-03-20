import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'userapp';
  sliderData: Array<ISlider>
  constructor(private httpClient: HttpClient) {

  }
  ngOnInit() {
    this.httpClient.get(environment.baseUrl + 'users').pipe(
      map((res: Array<ISlider>) => {
        for (var t = 0; t < res.length; t++) {
          res[t].imageUrl = environment.assetsUrl + res[t].imageUrl;
        }
        console.log('mao', res);
        return res;
      })
    ).subscribe((res: Array<ISlider>) => {
      console.log(res)
      this.sliderData = res;
    });
  }

}
export interface ISlider {
  role: string;
  email: string;
  imageUrl: string
}