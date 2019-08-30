import {AppMaterialModule} from '../../customied_modules/material.module';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

const sharedComponents = [];

const entryComponents = [];

const formInputs = [];

const sharedModules = [
  AppMaterialModule,
  FormsModule,
];

const sharedDirectives = [];

const sharedPipes = [];

@NgModule({
  imports:      [
    CommonModule,
    RouterModule,
    ...sharedModules
  ],
  exports: [
    ...sharedComponents,
    ...formInputs,
    ...sharedModules,
    ...sharedDirectives,
    ...sharedPipes
  ],
  entryComponents: [
    ...entryComponents
  ],
  declarations: [
    ...sharedComponents,
    ...formInputs,
    ...entryComponents,
    ...sharedDirectives,
    ...sharedPipes
  ],
  providers: [
  ]
})
export class SharedModule { }
