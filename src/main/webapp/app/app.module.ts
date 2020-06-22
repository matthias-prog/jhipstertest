import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipstertestSharedModule } from 'app/shared/shared.module';
import { JhipstertestCoreModule } from 'app/core/core.module';
import { JhipstertestAppRoutingModule } from './app-routing.module';
import { JhipstertestHomeModule } from './home/home.module';
import { JhipstertestEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipstertestSharedModule,
    JhipstertestCoreModule,
    JhipstertestHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipstertestEntityModule,
    JhipstertestAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class JhipstertestAppModule {}
