<template>
  <window :title="title">
    <template slot="header">
      <div class="toolbar-actions">
        <div class="btn-group">
          <icon-button icon="folder" />
          <icon-button icon="doc-text" />
        </div>
      </div>
    </template>
    <aa-editable class="editable" v-model="value" />
  </window>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Window from '../templates/window.vue'
import IconButton from '../molecules/icon-button.vue'
import AAEditable from '../atoms/aa-editable.vue'

@Component({
  components: { Window, IconButton, 'aa-editable': AAEditable }
})
export default class Main extends Vue {
  public title: string = 'Lapislazuli'
  public value: string = 'a'
}
</script>
<style lang="scss" scoped>
.editable {
  height: 100%
}
</style>
