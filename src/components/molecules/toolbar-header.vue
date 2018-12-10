<template>
  <header class="toolbar toolbar-header">
    <h1 class="title">{{ title }}</h1> 
    <slot />
  </header>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ToolbarHeader extends Vue {
  @Prop() private title!: string
}
</script>

<style scoped lang="scss">
header.toolbar-header {
  -webkit-user-select: none;
  -webkit-app-region: drag;
}
.title {
  font-weight: 500;
}
</style>

