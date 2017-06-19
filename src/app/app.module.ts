import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// Angular animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Covalent Teradata
import { CovalentLayoutModule} from '@covalent/core';
// (optional) Additional Covalent Modules imports
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CovalentDynamicFormsModule,
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentHttpModule,
    CovalentLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
