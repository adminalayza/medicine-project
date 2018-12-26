import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-injection',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './injection.component.html',
  styleUrls: ['./injection.component.css']
})
export class InjectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.loadScript('http://www.some-library.com/library.js');
    
    this.loadScript('../assets/js/jquery.js');
    this.loadScript('../assets/js/control.js');
    this.loadScript('../assets/js/main.js');


  }
  
  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

}
