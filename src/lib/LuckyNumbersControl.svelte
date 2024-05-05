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

<div class="grid gap-4">
  <div class="flex justify-between gap-2">
    Lucky Numbers
    <button onclick={add}>Add</button>
  </div>
  <ul>
    {#each formData.luckyNumbers as num, i}
      <li class="flex items-center justify-between gap-2 p-2 even:bg-gray-100">
        <div class="text-2xl">
          {num}
        </div>
        <button onclick={() => remove(i)}>Remove</button>
      </li>
    {/each}
  </ul>
</div>
