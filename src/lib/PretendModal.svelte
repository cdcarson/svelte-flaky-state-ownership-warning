<script lang="ts">
  import type { Snippet } from 'svelte';

  let { children }: { children: Snippet } = $props();
</script>

<div class="fixed bottom-0 left-0 right-0 top-0 z-50 bg-black/50"></div>
<div
  class="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-start justify-center overflow-y-scroll py-8"
>
  <fieldset
    class="not-prose relative grid w-80 gap-4 rounded border bg-white p-4 pt-8 md:w-1/2"
  >
    <legend
      class="absolute right-0 top-0 rounded-b rounded-e-none bg-gray-100 p-1 text-xs leading-none"
      >PretendModal.svelte</legend
    >
    {@render children()}
  </fieldset>
</div>
