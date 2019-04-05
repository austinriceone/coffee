import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {StopwatchDisplayComponent} from './components/stopwatch-display/stopwatch-display.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [StopwatchDisplayComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ],
  exports: [
      StopwatchDisplayComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
