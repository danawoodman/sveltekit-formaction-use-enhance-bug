<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData, PageData } from './$types';

	export let data: PageData;
	export let form: ActionData;
</script>

<pre>DATA: {JSON.stringify(data, null, 2)}</pre>
<pre>FORM: {JSON.stringify(form, null, 2)}</pre>

<form method="POST" action="?/a" use:enhance>
	<!-- <form method="POST" action="?/a"> -->
	<button>Submit A</button>
	<button formaction="?/b">Submit B</button>
</form>
