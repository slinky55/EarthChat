<script lang="ts">
    import { pb } from "./Database.js";
    import toast from "svelte-french-toast";
    import {getContext} from "svelte";

    let username    : string;
    let email       : string;
    let password    : string;
    let confirm     : string;

    const { hide } = getContext("modal");

    async function signup(e: any) {
        try {
            await pb.collection("users").create({
                username,
                email,
                password,
                passwordConfirm: confirm,
                name: username
            });

            hide();

            toast.success("Account created successfully");
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
        email
        <input type="email"  placeholder="email@example.com" bind:value={email} />
    </label>
    <label>
        password
        <input type="password" placeholder="****************" bind:value={password} />
    </label>
    <label>
        confirm password
        <input type="password" placeholder="****************" bind:value={confirm} />
    </label>
    <button on:click={signup}>Sign Up</button>
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