<script>
    import { getContext } from "svelte";

    import Chat from "./Chat.svelte";

    import { currentUser, pb } from "./Database"

    const { showLogin, showSignup } = getContext("modal");
</script>

<div class="container">
    <div class="header">
        <img src="/globe.svg" alt="EarthChat" width="64" height="64"/>
        <h1>EarthChat</h1>
    </div>
    <div class="content">
        {#if $currentUser}
            <Chat />
        {:else}
            <button on:click={showLogin}>Login</button>
            <button on:click={showSignup}>Sign Up</button>
        {/if}
    </div>
</div>

<style>
    .container {
        margin: 0;
        padding: 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100vw;
        height: 100vh;
    }

    .header {
        display: flex;
        align-items: center;

        column-gap: 1rem;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;

        row-gap: 1rem;
    }
</style>