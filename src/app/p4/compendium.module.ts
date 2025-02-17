import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

import { CompendiumRoutingModule } from './compendium-routing.module';
import { FusionDataService } from './fusion-data.service';

import { COMPENDIUM_CONFIG, FUSION_DATA_SERVICE, FUSION_TRIO_SERVICE } from '../compendium/constants';
import { P4CompendiumModule } from './p4-compendium.module';
import { CompendiumConfig } from './models';

import COMP_CONFIG_JSON from './data/comp-config.json';
import DEMON_DATA_JSON from './data/demon-data.json';
import GOLDEN_DEMON_DATA_JSON from './data/golden-demon-data.json';
import ENEMY_DATA_JSON from './data/enemy-data.json';
import GOLDEN_ENEMY_DATA_JSON from './data/golden-enemy-data.json';
import SKILL_DATA_JSON from './data/skill-data.json';
import GOLDEN_SKILL_DATA_JSON from './data/golden-skill-data.json';
import FUSION_CHART_JSON from './data/fusion-chart.json';
import GOLDEN_FUSION_CHART_JSON from './data/golden-fusion-chart.json';
import SPECIAL_RECIPES_JSON from './data/special-recipes.json';
import INHERIT_TYPES_JSON from './data/inheritance-types.json';
import PARTY_DATA_JSON from './data/party-data.json';
import GOLDEN_PARTY_DATA_JSON from './data/golden-party-data.json';
import GOLDEN_VANILLA_DEMON_JSON from './data/golden-vanilla-demon.json';
import VANILLA_DEMON_JSON from './data/vanilla-demon.json';
import MODDED_DEMON_DATA from './data/modded-demon-data.json';
import MODDED_SKILL_DATA from './data/modded-skill-data.json';
import MODDED_SPECIAL_RECIPES from './data/modded-special-recipes.json';
import TRICKSTER_DEMON_DATA from './data/trickster-demon-data.json';
import TRICKER_SPECIAL_RECIPES from './data/trickster-special-fusions.json';
function getEnumOrder(target: string[]): { [key: string]: number } {
  const result = {};
  for (let i = 0; i < target.length; i++) {
    result[target[i]] = i;
  }
  return result;
}

const skillElems = COMP_CONFIG_JSON.resistElems.concat(COMP_CONFIG_JSON.skillElems);
const inheritTypes: { [elem: string]: number[] } = {};
const races = [];

for(const race of COMP_CONFIG_JSON['races']) {
  races.push(race);
  races.push(race + ' P');
}

for (let i = 0; i < INHERIT_TYPES_JSON.inherits.length; i++) {
  inheritTypes[INHERIT_TYPES_JSON.inherits[i]] = INHERIT_TYPES_JSON.ratios[i];
}

for (const entry of Object.values(PARTY_DATA_JSON)) {
  entry.race = entry.race + ' P';
  entry['fusion'] = 'party';
}

for (const entry of Object.values(GOLDEN_PARTY_DATA_JSON)) {
  entry.race = entry.race + ' P';
  entry['fusion'] = 'party';
}

export const P4_COMPENDIUM_CONFIG: CompendiumConfig = {
  appTitle: 'Persona 4',
  gameTitles: { p4: 'Persona 4', p4g: 'Persona 4 Golden', p4gm: 'Persona 4 Golden Modded', p4r: 'Persona 4 Golden P5 Model Backport'},
  appCssClasses: ['p4'],

  races,
  raceOrder: getEnumOrder(races),
  baseStats: COMP_CONFIG_JSON.baseStats,
  skillElems,
  resistElems: COMP_CONFIG_JSON.resistElems,
  resistCodes: COMP_CONFIG_JSON.resistCodes,
  elemOrder: getEnumOrder(skillElems),
  inheritTypes,
  inheritElems: INHERIT_TYPES_JSON.elems,

  enemyStats: ['HP', 'MP'],
  enemyResists: COMP_CONFIG_JSON.resistElems.concat(['almighty']),

  demonData: { p4: [DEMON_DATA_JSON, VANILLA_DEMON_JSON, PARTY_DATA_JSON], p4g: [DEMON_DATA_JSON, VANILLA_DEMON_JSON, GOLDEN_DEMON_DATA_JSON, GOLDEN_PARTY_DATA_JSON, GOLDEN_VANILLA_DEMON_JSON], p4gm: [DEMON_DATA_JSON, GOLDEN_DEMON_DATA_JSON, GOLDEN_PARTY_DATA_JSON, MODDED_DEMON_DATA], p4r: [DEMON_DATA_JSON, GOLDEN_DEMON_DATA_JSON, GOLDEN_PARTY_DATA_JSON, MODDED_DEMON_DATA, TRICKSTER_DEMON_DATA]},
  skillData: { p4: [SKILL_DATA_JSON, GOLDEN_SKILL_DATA_JSON], p4g: [SKILL_DATA_JSON, GOLDEN_SKILL_DATA_JSON], p4gm: [SKILL_DATA_JSON, GOLDEN_SKILL_DATA_JSON, MODDED_SKILL_DATA], p4r: [SKILL_DATA_JSON, GOLDEN_SKILL_DATA_JSON, MODDED_SKILL_DATA]},
  enemyData: { p4: [ENEMY_DATA_JSON], p4g: [ENEMY_DATA_JSON, GOLDEN_ENEMY_DATA_JSON], p4gm: [ENEMY_DATA_JSON, GOLDEN_ENEMY_DATA_JSON], p4r: [ENEMY_DATA_JSON, GOLDEN_ENEMY_DATA_JSON]},

  normalTable: { p4: FUSION_CHART_JSON, p4g: GOLDEN_FUSION_CHART_JSON, p4gm: GOLDEN_FUSION_CHART_JSON, p4r: GOLDEN_FUSION_CHART_JSON},
  specialRecipes: { p4: [SPECIAL_RECIPES_JSON], p4g: [SPECIAL_RECIPES_JSON], p4gm: [SPECIAL_RECIPES_JSON, MODDED_SPECIAL_RECIPES], p4r: [SPECIAL_RECIPES_JSON, MODDED_SPECIAL_RECIPES, TRICKER_SPECIAL_RECIPES]},
  hasSkillCards: { p4: false, p4g: true, p4gm: true, p4r: true}
};

@NgModule({
  imports: [
    CommonModule,
    P4CompendiumModule,
    CompendiumRoutingModule
  ],
  providers: [
    Title,
    FusionDataService,
    [{ provide: FUSION_DATA_SERVICE, useExisting: FusionDataService }],
    [{ provide: FUSION_TRIO_SERVICE, useExisting: FusionDataService }],
    [{ provide: COMPENDIUM_CONFIG, useValue: P4_COMPENDIUM_CONFIG }]
  ]
})
export class CompendiumModule { }
