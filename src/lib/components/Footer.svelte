<script lang="ts">
  let currentYear = $derived(new Date().getFullYear());
</script>

<footer>
  <div class="container">
    &copy; {currentYear} Ronald Corona. All rights reserved
    <span class="accent">//</span>
  </div>
</footer>

<style>
  footer {
    background: #111;
    margin-top: 4rem;
    padding: 2rem;
    text-align: center;
    border-top: 2px solid #00ff41;
  }

  .accent {
    color: var(--accent-color);
  }
</style>
