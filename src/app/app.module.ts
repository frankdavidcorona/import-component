import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// Angular material
import {MdIconModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Covalent Teradata
import {CovalentLayoutModule, CovalentFileModule} from '@covalent/core';
// (optional) Additional Covalent Modules imports
import {CovalentHttpModule} from '@covalent/http';
import {CovalentHighlightModule} from '@covalent/highlight';
import {CovalentMarkdownModule} from '@covalent/markdown';
import {CovalentDynamicFormsModule} from '@covalent/dynamic-forms';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdIconModule,
    CovalentDynamicFormsModule,
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentHttpModule,
    CovalentLayoutModule,
    CovalentFileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
