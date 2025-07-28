import { Component } from '@angular/core';
import { News } from "./components/news/news";

@Component({
  selector: 'app-demo-ngcontent',
  imports: [News],
  templateUrl: './demo-ngcontent.html',
  styleUrl: './demo-ngcontent.scss'
})
export class DemoNgcontent {

}
