import { Component } from '@angular/core';
import { ProgramFacade } from 'feature-libs/program';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'intellij-TS2527-WEB49812';

  programName$ = this.program.name$;

  constructor(private readonly program: ProgramFacade) {
  }
}
