import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  navigationState!: string;
  isFr: boolean = true;
  isAr: boolean = false;
  langStoreValue: string = 'fr';
  isNavbarCollapsed = true;
  listLang = [
    { text: 'Français', textEn: 'French', flag: 'assets/icon/favicon.png', lang: 'fr' },
    { text: 'Anglais', textEn: 'English', flag: 'assets/icon/favicon.png', lang: 'en' },
  ];
  constructor(@Inject(DOCUMENT) private document: Document,
  private renderer: Renderer2,
  ) { }

  ngOnInit() {}
  callSidemenuCollapse() {
    const hasClass = this.document.body.classList.contains('side-closed');
    if (hasClass) {
      this.renderer.removeClass(this.document.body, 'side-closed');
      this.renderer.removeClass(this.document.body, 'submenu-closed');
    } else {
      this.renderer.addClass(this.document.body, 'side-closed');
      this.renderer.addClass(this.document.body, 'submenu-closed');
    }
  }
}
