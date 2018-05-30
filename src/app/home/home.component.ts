import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any;
  val: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.reloadData();
  };

  reloadData(){
    this.http.get('http://192.168.3.76:3000/coordinates').subscribe(data => {	  
      this.data = data;
      console.log(data);
	});
  };

  private isActive(fecha){
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    let actual = new Date(fecha);

    if (actual >= yesterday){
        return true;
    }
    else {
        return false;
    }
  };
}
