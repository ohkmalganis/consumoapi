import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './components/default/default.component';
import { ApirestComponent } from './components/apirest/apirest.component';
import { GraphqlComponent } from './components/graphql/graphql.component';

const appRoutes: Routes = [
    { path: '', component: DefaultComponent },
    { path: 'apirest', component: ApirestComponent },
    { path: 'graphql', component: GraphqlComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);