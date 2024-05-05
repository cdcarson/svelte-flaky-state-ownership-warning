import Prism from 'prismjs';
const editFormCode = `<script lang="ts">
  import LuckyNumbersControl from '$lib/LuckyNumbersControl.svelte';
  import NameControl from '$lib/NameControl.svelte';
  import type { ExampleData } from '$lib/types';
  type P = { data: ExampleData };
  let { data = $bindable() }: P = $props();
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
<\/script>

<fieldset class="not-prose relative grid gap-4 rounded border p-4">
  <legend
    class="absolute right-0 top-0 rounded-b rounded-e-none bg-gray-100 p-1 text-xs leading-none"
    >EditForm.svelte</legend
  >
  <NameControl bind:formData />
  <hr />
  <LuckyNumbersControl bind:formData />
  <hr />
  <button onclick={save}>Save (update bound state)</button>
</fieldset>
`;
const pageCode = `<script lang="ts">
  import type { ExampleData } from '$lib/types';
  import EditForm from './EditForm.svelte';
  import Highlight from 'svelte-highlight';
  import html from 'svelte-highlight/languages/xml';
  import s from 'svelte-highlight/styles/github-dark';
  let { data: codes } = $props();
  let data: ExampleData = $state({
    name: {
      first: 'Bill',
      last: 'Shakespeare'
    },
    luckyNumbers: [7]
  });
<\/script>

<svelte:head>
  {@html s}
</svelte:head>

<main class="prose mx-auto my-16 max-w-none px-4 lg:container">
  <h1 class="border-b pb-4">OK Example</h1>
  <div class="grid gap-y-4 md:grid-cols-2 md:gap-x-8">
    <div class="md:col-span-2 max-w-prose">
      <p class="mt-0">
        This example works as I'd expect, with the form's "interior" state
        entirely independent of the page state to which it is bound. To prove
        this...
      </p>
      <ul>
        <li>
          Make changes in the form. Note that the page state does not change.
        </li>
        <li>Hit save. This assigns the form's state to the page.</li>
        <li>
          Repeat (i.e. proving that form's state isn't messing with the page
          state after the above assignment.)
        </li>
      </ul>
      <p>
        <strong>But the problem</strong> is that the initialization of
        the form's state and the subsequent assignment back to the bound state have
        to be fully destructured. This is a pain in the neck and error-prone.
      </p>
    </div>

    <div>
      <h2 class="my-0 mb-2">Edit Form</h2>
      <EditForm bind:data />
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
