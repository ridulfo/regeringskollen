<script lang="ts">
  export let showModal = false;
  export let closeModal: () => void;
  export let reportUrl: string;
</script>

{#if showModal}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="outside-modal" on:click={closeModal}>
    <div class="modal">
      <iframe src={reportUrl} width="100%" height="100%" />
    </div>
  </div>
{/if}

<style>
  .outside-modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
  }
  .modal {
    width: 85%;
    max-width: 600px;
    height: 100%;
    background-color: white;
  }
</style>
