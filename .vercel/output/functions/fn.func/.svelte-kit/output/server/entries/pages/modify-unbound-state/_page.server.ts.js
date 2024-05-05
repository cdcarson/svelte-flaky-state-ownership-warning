import Prism from 'prismjs';
const editFormCode = `<script lang="ts">
  import LuckyNumbersControl from '$lib/LuckyNumbersControl.svelte';
  import NameControl from '$lib/NameControl.svelte';
  import type { ExampleData } from '$lib/types';
  // not bound...
  let { fromOutside }: { fromOutside: ExampleData } = $props();
  let formData: ExampleData = $state({
    name: fromOutside.name,
    luckyNumbers: fromOutside.luckyNumbers
  });
<\/script>

<fieldset class="not-prose relative grid gap-4 rounded border p-4">
  <legend
    class="absolute right-0 top-0 rounded-b rounded-e-none bg-gray-100 p-1 text-xs leading-none"
  >
    EditForm.svelte
  </legend>
  <NameControl bind:formData />
  <hr />
  <LuckyNumbersControl bind:formData />
</fieldset>
`;
const pageCode = `<script lang="ts">
  import EditForm from './EditForm.svelte';
  import type { ExampleData } from '$lib/types';
  import { Highlight } from 'svelte-highlight';
  import s from 'svelte-highlight/styles/github-dark';
  import html from 'svelte-highlight/languages/xml';

  let { data: codes } = $props();

  let data: ExampleData = $state({
    name: { first: 'Buffy', last: 'Arbuthnot-Pennywhistle' },
    luckyNumbers: [13]
  });
<\/script>

<svelte:head>
  {@html s}
</svelte:head>
<main class="prose mx-auto my-16 max-w-none px-4 lg:container">
  <h1 class="border-b pb-4">Modify Unbound State Example</h1>
  <div class="grid gap-y-4 md:grid-cols-2 md:gap-x-8">
    <div class="col-span-2">
      <p class="mt-0">
        Note that updating the form updates the page state,
        <strong>even though the data is not bound</strong>.
        There is no warning.
      </p>
    </div>

    <div>
      <h2 class="my-0 mb-2">Edit Form</h2>
      <EditForm fromOutside={data} />
    </div>
    <div>
      <h2 class="my-0 mb-2">Page State</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
    <div>
      <h2 class="my-0 mb-2">+page.svelte</h2>
      <div class="not-prose overflow-x-scroll">
        <pre class="language-html"><code>{@html codes.page}</code></pre>
      </div>
    </div>
    <div>
      <h2 class="my-0 mb-2">EditForm.svelte</h2>
      <div class="not-prose overflow-x-scroll">
        <pre class="language-html"><code>{@html codes.editForm}</code></pre>
      </div>
    </div>
  </div>
</main>
`;
const load = () => {
  const editForm = Prism.highlight(editFormCode, Prism.languages.html, 'html');
  const page = Prism.highlight(pageCode, Prism.languages.html, 'html');
  return {
    editForm,
    page
  };
};
export { load };
