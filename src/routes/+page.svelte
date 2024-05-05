<script lang="ts">
  import type { ExampleData } from '$lib/types';
  import EditForm from './EditForm.svelte';
  import ModalEditForm from './ModalEditForm.svelte';
  import errorText from './error.txt?raw';
  let { data: codes } = $props();
  let data: ExampleData = $state({
    name: {
      first: 'Bill',
      last: 'Shakespeare'
    },
    luckyNumbers: [7]
  });
  let modalShown = $state(false);
  let wrappedInModal = $state(false);
  let omitLuckyNumbers = $state(false);
</script>

<main class="prose mx-auto my-16 max-w-none px-4 lg:container">
  <h1 class="border-b pb-4">Flaky State Warnings</h1>
  <div class="max-w-prose">
    <p>
      An irrelevant (as far as the state in question goes) modal wrapper results
      in an erroneous <code>ownership_invalid_binding</code> dev warning:
    </p>
    <blockquote>
      client.js:2639 [svelte]
      ownership_invalid_binding.../src/lib/PretendModal.svelte passed a value to
      .../src/lib/LuckyNumbersControl.svelte with `bind:`, but the value is
      owned by .../src/routes/ModalEditForm.svelte. Consider creating a binding
      between .../src/routes/ModalEditForm.svelte and
      .../src/lib/PretendModal.svelte
    </blockquote>
    <details>
      <summary>Show full error</summary>
      <pre>{errorText}</pre>
    </details>
    <p>
      The data being passed around looks like this:
    </p>
    <div class="not-prose overflow-x-scroll">
      <pre class="language-typescript"><code>{@html codes.typesTs}</code></pre>
    </div>
    <p>
      Even though <code>name</code> and <code>luckyNumbers</code> are handled similarly, 
      with their own separate UI components, 
    </p>
    <ul>
      <li>
        The <code>name</code> pojo <strong>does not</strong> trigger the warning.
      </li>
      <li>
        The <code>luckyNumbers</code> array <strong> does</strong> trigger the warning.
      </li>
    </ul>
    <p>
      
      Test this by checking "Omit the lucky numbers component" and opening the
      modal.
    </p>
  </div>
  <div class="grid gap-y-4 md:grid-cols-2 md:gap-x-8">
    <div>
      <h2>Edit Form</h2>
      <label class="mb-2 flex items-center gap-1">
        <input type="checkbox" bind:checked={wrappedInModal} />
        Wrap form in a modal (causes the warning)
      </label>
      <label class="mb-2 flex items-center gap-1">
        <input type="checkbox" bind:checked={omitLuckyNumbers} />
        Omit the lucky numbers component (this gets rid of the warning)
      </label>
      <div class="mb-2">Open dev console to see warnings.</div>
      {#if wrappedInModal}
       
        <div class="mb-2">
          <button onclick={() => (modalShown = !modalShown)}
            >Toggle Modal</button
          >
        </div>
        {#if modalShown}
          <ModalEditForm bind:data bind:modalShown {omitLuckyNumbers} />
        {/if}
      {:else}
        <EditForm bind:data {omitLuckyNumbers} />
      {/if}
    </div>
    <div>
      <h2>Page State</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  </div>
 
</main>
