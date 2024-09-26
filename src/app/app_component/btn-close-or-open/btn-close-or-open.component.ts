import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-close-or-open',
  standalone: true,
  imports: [],
  templateUrl: './btn-close-or-open.component.html',
  styleUrl: './btn-close-or-open.component.sass'
})
export class BtnCloseOrOpenComponent {
 /* boton de expandir el contenido y cerrar el menu aside*/
 closeMainAside() {
  let elementBtn = document.querySelector(
    '.btnCloseMainAside i'
  ) as HTMLElement;
  let elementMaionAside = document.querySelector('.aside') as HTMLElement;
  let elementContentDashboard = document.querySelector(".content__dashboard") as HTMLElement;
  elementMaionAside.style.transition = '.4s ease';
  elementContentDashboard.style.transition = '.4s ease';

  if (elementBtn.classList.contains('bi-box-arrow-left')) {
    elementBtn.classList.replace('bi-box-arrow-left', 'bi-box-arrow-right');
    elementMaionAside.style.transform = 'translateX(-280px)';
    elementContentDashboard.classList.replace("btnCloseOrOpen","close")
    
  } else {
    elementBtn.classList.replace('bi-box-arrow-right','bi-box-arrow-left');
    elementContentDashboard.classList.replace("close","btnCloseOrOpen")
    elementMaionAside.style.transform = '';
  }
}
}
