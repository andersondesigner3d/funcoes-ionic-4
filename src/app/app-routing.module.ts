import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'navegacao',//home
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: './home/home.module#HomePageModule'},
  { path: 'action-sheet', loadChildren: './action-sheet/action-sheet.module#ActionSheetPageModule' },
  { path: 'alert', loadChildren: './alert/alert.module#AlertPageModule' },
  { path: 'badge', loadChildren: './badge/badge.module#BadgePageModule' },
  { path: 'buttons', loadChildren: './buttons/buttons.module#ButtonsPageModule' },
  { path: 'cards', loadChildren: './cards/cards.module#CardsPageModule' },
  { path: 'checkbox', loadChildren: './checkbox/checkbox.module#CheckboxPageModule' },
  { path: 'chip', loadChildren: './chip/chip.module#ChipPageModule' },
  { path: 'date-time', loadChildren: './date-time/date-time.module#DateTimePageModule' },
  { path: 'fab', loadChildren: './fab/fab.module#FabPageModule' },
  { path: 'inputs', loadChildren: './inputs/inputs.module#InputsPageModule' },
  { path: 'textarea', loadChildren: './textarea/textarea.module#TextareaPageModule' },
  { path: 'itens', loadChildren: './itens/itens.module#ItensPageModule' },
  { path: 'grid', loadChildren: './grid/grid.module#GridPageModule' },
  { path: 'images-avatar', loadChildren: './images-avatar/images-avatar.module#ImagesAvatarPageModule' },
  { path: 'splitpane-menu', loadChildren: './splitpane-menu/splitpane-menu.module#SplitpaneMenuPageModule' },
  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' },
  { path: 'modalconteudo', loadChildren: './modalconteudo/modalconteudo.module#ModalconteudoPageModule' },
  { path: 'navegacao', loadChildren: './navegacao/navegacao.module#NavegacaoPageModule' },
  { path: 'navegacao2', loadChildren: './navegacao2/navegacao2.module#Navegacao2PageModule' },
  { path: 'navegacao3', loadChildren: './navegacao3/navegacao3.module#Navegacao3PageModule' },
  { path: 'popover', loadChildren: './popover/popover.module#PopoverPageModule' },
  { path: 'loading', loadChildren: './loading/loading.module#LoadingPageModule' },
  { path: 'progress-bar', loadChildren: './progress-bar/progress-bar.module#ProgressBarPageModule' },
  { path: 'radio', loadChildren: './radio/radio.module#RadioPageModule' },
  { path: 'range', loadChildren: './range/range.module#RangePageModule' },
  { path: 'refresher', loadChildren: './refresher/refresher.module#RefresherPageModule' },
  { path: 'searchbar', loadChildren: './searchbar/searchbar.module#SearchbarPageModule' },
  { path: 'segment', loadChildren: './segment/segment.module#SegmentPageModule' },
  { path: 'select', loadChildren: './select/select.module#SelectPageModule' },
  { path: 'slides', loadChildren: './slides/slides.module#SlidesPageModule' },
  { path: 'toast', loadChildren: './toast/toast.module#ToastPageModule' },
  { path: 'toggle', loadChildren: './toggle/toggle.module#TogglePageModule' },
  { path: 'toobar', loadChildren: './toobar/toobar.module#ToobarPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
