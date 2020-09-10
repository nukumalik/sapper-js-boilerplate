<script>
  import { onMount } from 'svelte';
  import { data, fetchData, isLoading } from 'store/github';

  // Global Variables
  let currentData = [];
  data.subscribe((values) => (currentData = values));

  onMount(() => {
    fetchData();
  });
</script>

<style lang="scss">
  .wrapper {
    background-color: #eeeeee;
    padding: 2rem;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 2rem;
  }

  .card {
    background-color: #fff;
    border-radius: 0.8rem;
    padding: 3rem;
    text-align: center;

    img {
      border-radius: 50%;
      height: 10rem;
      width: 10rem;
    }
  }

  .title-page {
    margin: 5rem auto;
    width: fit-content;
  }
</style>

<h1 class="title-page">GitHub Page</h1>

{#if $isLoading}
  <h1>Loading...</h1>
{:else}
  <div class="wrapper">
    {#each currentData as item}
      <div class="card">
        <img alt="icon" src={item.avatar_url} />
        <h1>{item.login}</h1>
      </div>
    {/each}
  </div>
{/if}
