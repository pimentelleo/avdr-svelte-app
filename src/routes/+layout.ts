export const ssr = true;
import { PUBLIC_BACKEND_URL } from '$env/static/public';
/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    const res = await fetch(PUBLIC_BACKEND_URL + "/onlineusers");
    const item = await res.json();
    console.log(item)

    return { item };
}

