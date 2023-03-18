import PocketBase from 'PocketBase';

import { writable} from "svelte/store";

export const pb = new PocketBase("https://bmason.me:80");

export const currentUser = writable(pb.authStore.model);

pb.authStore.onChange((user) => {
    currentUser.set(pb.authStore.model);
});

