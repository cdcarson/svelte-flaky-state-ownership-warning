<script lang="ts">
  import type { ExampleData } from '$lib/types';
  import EditForm from './EditForm.svelte';
  let data: ExampleData = $state({
    name: {
      first: 'Bill',
      last: 'Shakespeare'
    },
    luckyNumbers: [7]
  });
  let modalShown = $state(false);
  let omitLuckyNumbers = $state(false);
</script>

<main class="prose mx-auto mb-96 mt-16 max-w-none px-4 lg:container">
  <h1 class="border-b pb-4">Flaky State Warnings</h1>
  <div class="max-w-prose">
    <p>
      An irrelevant (as far as the state in question goes) modal wrapper results
      in an <code>ownership_invalid_binding</code> dev warning:
    </p>
    <blockquote>
      [svelte] ownership_invalid_binding.../src/lib/PretendModal.svelte passed a
      value to .../src/lib/LuckyNumbersControl.svelte with `bind:`, but the value
      is owned by .../src/routes/EditForm.svelte. Consider creating a binding
      between .../src/routes/EditForm.svelte and .../src/lib/PretendModal.svelte
    </blockquote>
  </div>
  

  <div class="grid gap-y-4 md:grid-cols-2 md:gap-x-8">
    <div>
      <h2>Edit</h2>
      <label class="mb-2 flex items-baseline gap-1">
        <input type="checkbox" bind:checked={omitLuckyNumbers} />
        <div class="leading-tight">
          Omit the lucky numbers component
          <small>
            (for some reason <code>LuckyNumbersControl.svelte</code> causes the
            warning, but the similar <code>NameControl.svelte</code> does not )
          </small>
        </div>
      </label>
      <div class="mb-2">Open dev console to see warnings.</div>
      <div class="mb-2">
        <button onclick={() => (modalShown = !modalShown)}
          >Toggle Modal Form</button
        >
      </div>
      {#if modalShown}
        <EditForm bind:data bind:modalShown {omitLuckyNumbers} />
      {/if}
    </div>
    <div>
      <h2>Page State</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  </div>
</main>
