import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peptide',
  templateUrl: './peptide.component.html',
  styleUrls: ['./peptide.component.css']
})
export class PeptideComponent implements OnInit {

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
