<template>
  <div>
    <h1>{{ name }}</h1>
    <p>Level {{ level }} {{ classType }}</p>
    <p>Proficiency bonus: {{ proficiencyBonus }}</p>
    <ul>
      <Ability
        v-for="(score, name) in abilities"
        v-bind:key="name"
        :name="name"
        :score="score"
        :modifier="abilityModifierFromScore(score)"
      />
    </ul>
    <ul>
      <Skill
        v-for="skill in skillNames"
        v-bind:key="skill"
        :name="skill"
        :proficient="skillProficiencies.indexOf(skill) >= 0"
        :modifier="skillModifier(skill)"
      />
    </ul>
  </div>
</template>

<script>
import Ability from "./Ability.vue";
import Skill from "./Skill.vue";

import { SKILL_NAMES, SKILL_ABILITY_MAPPING } from "../utils/5e_constants";
import { abilityModifierFromScore } from "../utils/character_calculations";

export default {
  name: "CharacterSheet",
  components: {
    Ability,
    Skill,
  },
  data: function () {
    return {
      skillNames: SKILL_NAMES,
    };
  },
  props: {
    name: String,
    classType: String,
    level: Number,
    abilities: Object,
    skillProficiencies: Array,
  },
  computed: {
    proficiencyBonus: function () {
      return Math.ceil(this.level / 4) + 1;
    },
  },
  methods: {
    abilityModifierFromScore,
    skillModifier: function (skill) {
      return (
        abilityModifierFromScore(this.abilities[SKILL_ABILITY_MAPPING[skill]]) +
        (this.skillProficiencies.indexOf(skill) >= 0 ? 2 : 0)
      );
    },
  },
};
</script>

<style module></style>
