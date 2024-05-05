<script lang="ts">
  import LuckyNumbersControl from '$lib/LuckyNumbersControl.svelte';
  import NameControl from '$lib/NameControl.svelte';
  import type { ExampleData } from '$lib/types';
  type P = { data: ExampleData; omitLuckyNumbers: boolean };
  let { data = $bindable(), omitLuckyNumbers }: P = $props();
  // needs to be destructured
  let formData: ExampleData = $state({
    name: { ...data.name },
    luckyNumbers: [...data.luckyNumbers]
  });
  // needs to be destructured
  const save = () => {
    data.luckyNumbers = [...formData.luckyNumbers];
    data.name = { ...formData.name };
  };
</script>

<fieldset class="not-prose relative grid gap-4 rounded border p-4">
  <legend
    class="absolute right-0 top-0 rounded-b rounded-e-none bg-gray-100 p-1 text-xs leading-none"
    >EditForm.svelte</legend
  >
  <NameControl bind:formData />
  {#if !omitLuckyNumbers}
    <hr />
    <LuckyNumbersControl bind:formData />
  {/if}
  <hr />
  <button onclick={save}>Save (update bound state)</button>
</fieldset>
