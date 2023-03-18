<script lang="ts">
    import { pb } from "./Database.js";

    import toast from "svelte-french-toast";
    import {getContext} from "svelte";

    let username: string;
    let password: string;

    const { hide } = getContext("modal");

    async function login(e: any) {
        try {
            await pb.collection("users").authWithPassword(username, password);
            hide();
            toast.success("Logged in");
        } catch (e) {
            toast.error(e.message);
        }
    }
</script>

<form on:submit|preventDefault>
    <label>
        username
        <input type="text"  placeholder="username" bind:value={username} />
    </label>
    <label>
        password
        <input type="password" placeholder="****************" bind:value={password} />
    </label>
    <button on:click={login}>Login</button>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    label {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    input {
        margin: 0.5rem;
    }
</style>