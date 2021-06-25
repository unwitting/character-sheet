<template>
  <div id="app" :class="$style.app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <CharacterSheet v-bind="character" />
  </div>
</template>

<script>
import CharacterSheet from "./components/CharacterSheet.vue";

export default {
  name: "App",
  components: {
    CharacterSheet,
  },
  data: () => ({
    character: {
      name: "Naia Andrina",
      classType: "Warlock",
      level: 3,
      abilities: {
        strength: 10,
        dexterity: 12,
        constitution: 16,
        intelligence: 8,
        wisdom: 13,
        charisma: 16,
      },
      skillProficiencies: [
        "athletics",
        "deception",
        "intimidation",
        "nature",
        "perception",
        "persuasion",
      ],
    },
  }),
};
</script>

<style module>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
