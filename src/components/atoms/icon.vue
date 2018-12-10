<template >
  <span :class="['icon', 'icon-'+name]"></span>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
})
export default class Icon extends Vue {
  @Prop() public name!: string
}

</script>

