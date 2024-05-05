<script lang="ts">
  import LuckyNumbersControl from '$lib/LuckyNumbersControl.svelte';
  import NameControl from '$lib/NameControl.svelte';
  import PretendModal from '$lib/PretendModal.svelte';
  import type { ExampleData } from '$lib/types';
  type P = {
    data: ExampleData;
    modalShown: boolean;
    omitLuckyNumbers: boolean;
  };
  let {
    data = $bindable(),
    modalShown = $bindable(),
    omitLuckyNumbers
  }: P = $props();
  // needs to be destructured
  let formData: ExampleData = $state({
    name: { ...data.name },
    luckyNumbers: [...data.luckyNumbers]
  });
  // needs to be destructured
  const save = () => {
    data.luckyNumbers = [...formData.luckyNumbers];
    data.name = { ...formData.name };
    modalShown = false;
  };
</script>

<PretendModal>
  <fieldset class="not-prose relative grid gap-4 rounded border p-4 pt-8">
    <legend
      class="absolute right-0 top-0 rounded-b rounded-e-none bg-gray-100 p-1 text-xs leading-none"
      >EditForm.svelte</legend
    >
    <NameControl bind:formData />
    {#if !omitLuckyNumbers}
      <LuckyNumbersControl bind:formData />
    {/if}

    <div class="flex justify-between">
      <button onclick={() => (modalShown = false)}>Cancel</button>
      <button onclick={save}>Save (update bound state)</button>
    </div>
  </fieldset>
</PretendModal>
