import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';

import { Test1Component } from './test1/test1.component';

export const CONTAINERS = [
  Test1Component,
];

@NgModule({
  declarations: [CONTAINERS],
  exports: [CONTAINERS],
  imports: [
    CommonModule,
    TestRoutingModule
  ],
})
export class TestModule { }
