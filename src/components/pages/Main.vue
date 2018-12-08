<template>
  <window :title="title">
    <template></template>
  </window>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Window from '../templates/window.vue'

@Component({
  components: { Window }
})
export default class Main extends Vue {
  public title: string = 'Lapislazuli'
}
</script>

