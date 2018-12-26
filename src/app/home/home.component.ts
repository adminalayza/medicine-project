import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  result:string = "";
  constructor() { }

  submit(x) {
   
    var cars = ["WJ6XVAP9", "6HLLDDXN", "7XV9GMHK", 'WM6YQVXJ', "7XKL8QKG", "HGMUM3GN", "YYLWPHRD", "9E33R3MD", "A8JZLNU8", "TXEENKYD", "VKSB4934", "WKPK39VB", "E3D9EX4S", "Q65EZHYM", "F9G2A2SD", "NZKPW386", "BD2DQNJJ", "GFY8B3QY", "PCJVGZA6", "RTL9K7LH", "ENG2JE3A", "YYDWHFJX", "2ST8LW5U", "W89LS2L7", "UN6YWNS9", "KXEZPQZQ", "AUB28WUV", "MY3CLGNE", "FMWEL759", "6Q867HE7", "Q6AFG4T9", "XTXXJZ5V", "8QWPDNGK", "XT884GBD", "J7AFKMMC", "Y6UZK2AV", "MX755XEM", "U9LN723H", "XPN2KH2Y", "5LLHC5XV", "UFKT8KWP", "HD9ACGHV", "TX8WBH7A", "ULM7SX2X", "TE7AFUYC", "D46YU3VU", "FRPGVW36", "MWXV8SBR", "SW8QNXDA", "NA4VLTE6", "YGYVQ8MJ", "TD7Y38M8", "T9SQQGM5", "KRZKPHPG", "SA7R3MNQ", "6Y8XP8QJ", "Y7V72XWH", "ZVQYZ99H", "9LKXL8K5", "N7QY2LDQ", "5C6AMZKM", "TTJGFFMU", "37A4H3KF", "2KJR8B5C", "P34G2BDU", "T5NGUZTE", "D9NCB5K5", "MGFJDNNL", "5QXLHUZG", "PTEWYXGH", "BEDNUXBV", "TMG93UJD", "ZRBZLTAR", "ZT9KT7KN", "7VX63Y9D", "7GVPXM8Y", "C2648F8M", 'RR2BCCYZ', "P2JR4CPR", "52B7RKE2", "XKB8NTTB", "DRYSCXL5", "MMKBZ622", "GVW2B4U3", "4LGFUK29", "33NG8TNF", "QVBSCW8L", "2NGQ8RJY", "UT7JXCUG", "PFTL5V5R", "XVAT58L6", "77TCFA2T", "XTNK7LU5", "4NSACN8R", "2ZLL7YUA", "VWC6AMAH", "RET2JBUV", "U7VAFBZ3", "V6JXQ369", "P7XDLDTK"];


    if (cars.indexOf(x.value.vcode) > -1) {
      //In the array!
      
      this.result = "yes";
      console.log(this.result);
  } else {
      //Not in the array
      this.result = "no";
      console.log(this.result);
  }

    // this.submitted = true;


  }

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
