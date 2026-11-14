import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";
import { LOGIN } from "src/app/constants/app-routes";

@Component({
  selector: "app-not-connected",
  templateUrl: "./not-connected.component.html",
  styleUrls: ["./not-connected.component.css"],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class NotConnectedComponent {
  constructor(private router: Router) {}

  goToLoginPage() {
    this.router.navigate(["/" + LOGIN]);
  }
}
