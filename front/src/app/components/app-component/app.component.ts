import { Component, OnDestroy, ChangeDetectionStrategy } from "@angular/core";
import { CacheUtils } from "src/app/utils/CacheUtils";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class AppComponent implements OnDestroy {
  ngOnDestroy(): void {
    CacheUtils.emptyCache();
  }
  title = "angular-project";
}
