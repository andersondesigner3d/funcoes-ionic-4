import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',//home
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'action-sheet', 
    loadChildren: './action-sheet/action-sheet.module#ActionSheetPageModule' },
  { path: 'alert', loadChildren: './alert/alert.module#AlertPageModule' },
  { path: 'badge', loadChildren: './badge/badge.module#BadgePageModule' },
  { path: 'buttons', loadChildren: './buttons/buttons.module#ButtonsPageModule' },
  { path: 'cards', loadChildren: './cards/cards.module#CardsPageModule' },
  { path: 'checkbox', loadChildren: './checkbox/checkbox.module#CheckboxPageModule' },
  { path: 'chip', loadChildren: './chip/chip.module#ChipPageModule' },
  { path: 'date-time', loadChildren: './date-time/date-time.module#DateTimePageModule' },
  { path: 'fab', loadChildren: './fab/fab.module#FabPageModule' },
  { path: 'inputs', loadChildren: './inputs/inputs.module#InputsPageModule' },
  { path: 'textarea', loadChildren: './textarea/textarea.module#TextareaPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
