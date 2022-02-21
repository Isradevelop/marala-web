import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  languages: any[];

  selectedCity1: any;

  language_selected: string = this.translate.getBrowserLang();

  // this variable emit a value to navbar.component for change the language
  @Output() changeLanguageOfNavBar: EventEmitter<string> = new EventEmitter();

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.languages = [
      {
        name: "spanish",
        code: 'es',
        image: 'assets/images/flags/es.svg'
      },
      {
        name: 'english',
        code: 'gb',
        image: 'assets/images/flags/gb.svg'
      },
      {
        name: 'french',
        code: 'fr',
        image: 'assets/images/flags/fr.svg'
      },
      {
        name: 'german',
        code: 'de',
        image: 'assets/images/flags/de.svg'
      },
      /*{
        name: 'russian',
        code: 'ru',
        image: 'assets/images/flags/ru.svg'
      },
      {
        name: 'chinese',
        code: 'cn',
        image: 'assets/images/flags/cn.svg'
      }*/
    ];
  }


  changeLanguage(evt: any) {
    const code = evt.value.code;
    this.translate.setDefaultLang(code);
    this.translate.use(code);

    this.language_selected = code;
    this.changeLanguageOfNavBar.emit(code);
  }


}
