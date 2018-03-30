<template>
  <div class="pixi-renderer">
    <canvas ref="renderCanvas"></canvas>    
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Provide, Inject } from "vue-property-decorator";
import { Application, Container } from "pixi.js";

@Component
export default class PixiRenderer extends Vue {
  @Provide() Stage: Container = new Container();
  @Provide() Name: string = 'Renderer';
  @Inject() EventBus: Vue|undefined;

  mounted() {
    const renderCanvas: HTMLCanvasElement = this.$refs.renderCanvas as HTMLCanvasElement;
    const width = renderCanvas.offsetWidth;
    const height = renderCanvas.offsetHeight;

    const PIXIApp = new Application(width, height, {
      view: renderCanvas,
      backgroundColor: 0x1099cc
    });
    PIXIApp.stage.addChild(this.Stage);

    this.EventBus && this.EventBus.$emit('ready');
  }
};
</script>
  
<style lang="scss" scoped>
canvas {
  width: 100%;
  height: 100%;
}
</style>