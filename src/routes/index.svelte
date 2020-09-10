<script context="module">
	import {getToken} from 'utils/common';
	
	export async function preload(page, session) {
		const token = getToken();

		if (token) return this.redirect(302, 'home');

		return;
	}
</script>

<h1>Index</h1>