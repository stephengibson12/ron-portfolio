<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '../app.css';

  let { children } = $props();
</script>

<div id="app">
  <Header />
  <main class="container">
    {@render children()}
  </main>
  <Footer />
</div>
