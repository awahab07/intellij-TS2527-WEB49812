import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ProgramComponent } from './program.component';
import * as fromProgram from './state/program.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProgramEffects } from './state/program.effects';



@NgModule({
  declarations: [ProgramComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromProgram.programFeatureKey, fromProgram.reducer),
    EffectsModule.forFeature([ProgramEffects])
  ],
  exports: [ProgramComponent]
})
export class ProgramFeatureModule { }
