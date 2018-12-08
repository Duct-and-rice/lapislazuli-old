<template>
<div>
  <toolbar-header :title="title">
    <slot name="header" />
  </toolbar-header>
  <slot />
</div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import ToolbarHeader from '../molecules/toolbar-header.vue'

@Component({
  components: { ToolbarHeader }
})
export default class Window extends Vue {
  @Prop() public title!: string
}
</script>

