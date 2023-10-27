import { Component } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { RouterModule } from "@angular/router";

@Component({
  standalone: true,
  selector: "app-root",
  template: `<main>
    <header class="brand-name">
      <a routerLink="/">
        <img
          class="brang-logo"
          src="/assets/logo.svg"
          alt="logo"
          area-hidden="true"
      /></a>
    </header>
    <section class="content">
      <!-- <app-home></app-home> -->
      <router-outlet></router-outlet>
    </section>
  </main>`,
  styleUrls: ["./app.component.css"],
  imports: [HomeComponent, RouterModule],
})
export class AppComponent {
  title = "homes";
}
