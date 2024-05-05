<script lang="ts">
  import type { ExampleData } from './types';

  type P = { formData: ExampleData };
  let { formData = $bindable() }: P = $props();
  const remove = (i: number) => {
    formData.luckyNumbers.splice(i, 1);
  };
  const add = () => {
    formData.luckyNumbers.push(Math.ceil(Math.random() * 10_000));
  };
</script>

<fieldset class="not-prose relative grid gap-4 rounded border p-4 pt-8">
  <legend
    class="absolute right-0 top-0 rounded-b rounded-e-none bg-gray-100 p-1 text-xs leading-none"
    >LuckyNumbersControl.svelte</legend
  >
  <div class="grid gap-4">
    <div class="flex justify-between gap-2">
      <div>
        <strong>Lucky Numbers</strong>
        ({formData.luckyNumbers.length})
      </div>
      <button onclick={add}>Add</button>
    </div>
    <ul>
      {#each formData.luckyNumbers as num, i}
        <li
          class="flex items-center justify-between gap-2 p-2 even:bg-gray-100"
        >
          <div class="text-2xl">
            {num}
          </div>
          <button onclick={() => remove(i)}>Remove</button>
        </li>
      {/each}
    </ul>
  </div>
</fieldset>
