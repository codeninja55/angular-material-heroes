import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  constructor(
    private heroService: HeroService,
    private location: Location,
  ) { }

  ngOnInit() { }

  goBack(): void {
    this.location.back();
  }

  add(name: string, realName?: string, powers?: string, abilities?: string) {
    name = name.trim();
    realName = name.trim();
    if (!name) { return; }

    this.heroService.addHero( new Hero(name, realName, powers, abilities) );

  }
}
