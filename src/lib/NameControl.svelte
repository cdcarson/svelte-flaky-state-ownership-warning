<script lang="ts">
  import type { ExampleData } from './types';

  type P = { formData: ExampleData };
  let { formData = $bindable() }: P = $props();
</script>

<div class="grid gap-4 lg:grid-cols-2">
  <div>
    <label
      >First Name <br />
      <input type="text" bind:value={formData.name.first} /></label
    >
  </div>
  <div>
    <label
      >Last Name <br />
      <input type="text" bind:value={formData.name.last} /></label
    >
  </div>
</div>
