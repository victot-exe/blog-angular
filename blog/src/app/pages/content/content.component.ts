import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string = "https://criticalhits.com.br/wp-content/uploads/2019/10/tony-stark.jpg"
  contentTitle:string = "Noticia"
  contentDescription:string = "Olá Mundo!"
  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get('id'))
    )
  }

}
