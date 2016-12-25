import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { SRMeterComponent } from './SRMeter.component';

const routes: Routes = [
    { path: '', redirectTo: '/SRMeter', pathMatch: 'full' },
    { path: 'SRMeter', component: SRMeterComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }