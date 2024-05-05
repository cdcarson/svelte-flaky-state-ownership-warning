<script lang="ts">
  import type { Snippet } from 'svelte';

  let { children }: { children: Snippet } = $props();
</script>

<fieldset
  class="not-prose relative grid w-full gap-4 rounded border bg-white p-4 pt-8"
>
  <legend
    class="absolute right-0 top-0 rounded-b rounded-e-none bg-gray-100 p-1 text-xs leading-none"
    >PretendModal.svelte</legend
  >
  {@render children()}
</fieldset>
