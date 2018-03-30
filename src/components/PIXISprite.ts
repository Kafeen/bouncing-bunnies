import Vue from 'vue';
import {Sprite, Container} from 'pixi.js';
import {Component, Inject} from 'vue-property-decorator';

@Component
export default class PixiSprite extends Vue {
  @Inject() EventBus: Vue|undefined;
  @Inject() Stage: Container|undefined;
  @Inject() Name: string|undefined;

  sprite: Sprite|undefined = undefined;

  created() {
    this.sprite = Sprite.fromImage('https://cataas.com/cat', true);
    this.EventBus && this.EventBus.$on('ready', () => 
      this.Stage && this.sprite && this.Stage.addChild(this.sprite)
    );
    console.log('SPRITE Created', this.Name);
  }

  mounted() {
    console.log('SPRITE mounted', this.$parent, typeof this.$parent);
  }

  render(h: any) {
    console.log('SPRITE rendered ', this.$parent, typeof this.$parent);
    return h();
  }
};
