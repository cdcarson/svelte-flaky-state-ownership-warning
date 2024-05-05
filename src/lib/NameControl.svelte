<script lang="ts">
  import type { ExampleData } from './types';

  type P = { formData: ExampleData };
  let { formData = $bindable() }: P = $props();
  const updateFirstName = (event: Event) => {
    formData.name.first = (event.target as HTMLInputElement).value
  }
</script>

<fieldset class="not-prose relative grid gap-4 rounded border p-4 pt-8">
  <legend
    class="absolute right-0 top-0 rounded-b rounded-e-none bg-gray-100 p-1 text-xs leading-none"
    >NameControl.svelte</legend
  >
  <div class="grid gap-4 lg:grid-cols-2">
    <div>
      <label
        >First Name <br />
        <input type="text" oninput={updateFirstName} value={formData.name.first} /></label
      >
    </div>
    <div>
      <label
        >Last Name <br />
        <input type="text" bind:value={formData.name.last} /></label
      >
    </div>
  </div>
</fieldset>
