import PocketBase from 'pocketbase';

import { writable } from "svelte/store";

export const pb = new PocketBase("https://bmason.me");

export const currentUser = writable(pb.authStore.model);

pb.authStore.onChange((user) => {
    currentUser.set(pb.authStore.model);
});

