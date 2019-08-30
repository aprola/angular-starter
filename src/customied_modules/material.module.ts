import {NgModule} from '@angular/core';
import {MatRippleModule} from '@angular/material';


const ALL_IMPORTS = [
  MatRippleModule
];


@NgModule({
  imports: ALL_IMPORTS,
  exports: ALL_IMPORTS
})

export class AppMaterialModule {}
