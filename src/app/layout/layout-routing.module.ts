import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth.guard';
import { LayoutOutletComponent } from './layout-outlet/layout-outlet.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutOutletComponent,
        children: [
            {
                path: 'test',
                loadChildren: () => import('../test/test.module').then(m => m.TestModule)
            },
            {
                path: '',
                redirectTo: '/test/test1',
                pathMatch: 'full'
            }
        ],
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
