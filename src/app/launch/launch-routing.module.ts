import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaunchComponent } from './launch/launch.component';

const routes: Routes = [
    
    {
        path: 'launch',
        component: LaunchComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LaunchRoutingModule { }
