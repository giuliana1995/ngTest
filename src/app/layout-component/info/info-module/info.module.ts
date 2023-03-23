import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from '../info.component';
import { InfoRoutingModules } from '../info-routing.module';
import { InfoService } from '../info-service/info.service';
import { InfoFiglioComponent } from '../info-figlio/info-figlio.component';

@NgModule({
  declarations: [InfoComponent, InfoFiglioComponent],
  imports: [CommonModule, InfoRoutingModules],
  exports: [InfoComponent],
  providers: [],
})
export class InfoModule {}
