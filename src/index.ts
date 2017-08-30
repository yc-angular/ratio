import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ratio } from './directive';

export * from './directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Ratio
  ],
  exports: [
    Ratio
  ]
})
export class RatioModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RatioModule
    };
  }
}
