import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuditEntry } from 'src/app/models/audit.model';
import * as AuditsActions from "../../actions/audits.actions";
import * as AuditsSelectors from "../../selectors/audits.selectors";


@Component({
  selector: 'app-audits',
  templateUrl: './audits.component.html',
  styleUrls: ['./audits.component.scss']
})
export class AuditsComponent implements OnInit {

  pageSize = 10;
  public audits$: Observable<AuditEntry[]>;
  totalItems$: any;
  public displayedColumns: any = ["uri",'email',"clientIp",'client_org',"serverIp",'server_org',"statusMessage","createdAt","updatedAt"];
  constructor(private readonly store: Store) { 
    this.store.dispatch(AuditsActions.loadAudits({pageIndex: 0, pageSize: this.pageSize}));
  }

  ngOnInit(): void {
    this.audits$ = this.store.select(AuditsSelectors.getAudits);
    this.totalItems$ = this.store.select(AuditsSelectors.getTotalItems);
  }

  public pageNavigate(event:PageEvent){
    this.store.dispatch(AuditsActions.loadAudits({pageIndex: event.pageIndex, pageSize: event.pageSize}));
  }
}
