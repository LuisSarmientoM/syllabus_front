import { Component, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
import { Subscription } from "rxjs";
import { MediaMatcher } from "@angular/cdk/layout";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;

  subscription: Subscription = new Subscription();
  private _mobileQueryListener: () => void;

  constructor(
    private media: MediaMatcher,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.mobileQuery = this.media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
