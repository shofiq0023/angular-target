import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';

const routes: Routes = [
	{ path: '', redirectTo: 'auth', pathMatch: 'full' },
	{ path: 'auth', component: AuthenticationComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
