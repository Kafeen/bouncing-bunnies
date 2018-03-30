<template>
  <div id="app">
    <pixi-renderer>
      <pixi-sprite></pixi-sprite>
    </pixi-renderer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PixiRenderer from './Components/PixiRenderer.vue';
import PixiSprite from './components/PIXISprite';
import { Component, Provide } from 'vue-property-decorator';

@Component({
  components: {PixiRenderer, PixiSprite}
})
export default class App extends Vue {
  @Provide() EventBus: Vue = new Vue();
  @Provide() Name: string = 'App';
}
</script>

<style lang="scss" scoped>
#app {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
