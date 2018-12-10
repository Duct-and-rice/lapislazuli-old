<template>
  <button class="btn btn-large btn-default">
    <icon :name="icon"/>
  </button>
</template>
<script lang="ts">
import Icon from '../atoms/icon.vue'
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  components: { Icon }
})
export default class IconButton extends Vue {
  @Prop() public icon!: string
}
</script>
