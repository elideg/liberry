import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ScannerComponent } from './scanner/scanner.component';

const routes: Routes = [
  { path: '', redirectTo: 'scanner', pathMatch: 'full' },
  { path: '', component: ScannerComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
