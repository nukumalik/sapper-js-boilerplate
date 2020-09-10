<script>
  import Navbar from 'components/Navbar';

  export let segment;
</script>

<style>
  main {
    position: relative;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Navbar {segment} />

<main>
  <slot />
</main>
