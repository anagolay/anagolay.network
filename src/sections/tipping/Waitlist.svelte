<script lang="ts">
	import Section from '$src/components/Section.svelte';
	import SectionTitle from '$src/components/SectionTitle.svelte';
</script>

<svelte:head>
	<script>
		(function (m, a, i, l, e, r) {
			m['MailerLiteObject'] = e;
			function f() {
				var c = { a: arguments, q: [] };
				var r = this.push(c);
				return 'number' != typeof r ? r : f.bind(c.q);
			}
			f.q = f.q || [];
			m[e] = m[e] || f.bind(f.q);
			m[e].q = m[e].q || f.q;
			r = a.createElement(i);
			var _ = a.getElementsByTagName(i)[0];
			r.async = 1;
			r.src = l + '?v' + ~~(new Date().getTime() / 1000000);
			_.parentNode.insertBefore(r, _);
		})(window, document, 'script', 'https://static.mailerlite.com/js/universal.js', 'ml');

		var ml_account = ml('accounts', '3570149', 'u6q2w6g8i7', 'load');
	</script>
</svelte:head>

<Section id="tipping_waitlist">
	<div class="w-full pb-24 md:pb-40 flex flex-col items-center">
		<SectionTitle class="pt-20 pb-16 md:py-20">
			<div class="max-w-2xl">
				Stay in charge of what you create.
				<br />
				Your Art. Your Terms.
			</div>
		</SectionTitle>
		<div class="ml-form-embed max-w-3xl" data-account="3570149:u6q2w6g8i7" data-form="5810035:k3o7g5" />
	</div>
</Section>
