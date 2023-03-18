<script>
    import { writable } from "svelte/store";
    import { setContext} from "svelte";

    import { Toaster } from "svelte-french-toast";
    import { Modal, bind } from "svelte-simple-modal";

    import MainPage from "./lib/MainPage.svelte";
    import Login from "./lib/Login.svelte";
    import Signup from "./lib/Signup.svelte";

    const modal = writable(null);

    const showLogin = () => {
        modal.set(bind(Login, {}));
    };

    const showSignup = () => {
        modal.set(bind(Signup, {}));
    };

    setContext("modal", {
        showLogin,
        showSignup,
        hide: () => modal.set(null)
    })
</script>

<Toaster />
<Modal show={$modal}>
    <MainPage />
</Modal>