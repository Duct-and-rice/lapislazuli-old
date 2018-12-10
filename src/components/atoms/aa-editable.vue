<template>
  <div contenteditable @input="change" class="aa-editable">{{value}}</div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'AAEditable'
})
export default class ToolbarHeader extends Vue {
  @Prop({ default: '', type: String }) public value!: string
  public mounted () {
    (this.$el as HTMLDivElement).innerText = this.value
  }
  public change (e: Event) {
    if (e.target) {
      const value = (e.target as HTMLDivElement).innerText
      this.$emit('input', value)
    }
  }
}
</script>
