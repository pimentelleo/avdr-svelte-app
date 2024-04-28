/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    const res = await fetch(`https://uk141ik69qaz.share.zrok.io/onlineusers`);
    const item = await res.json();
    console.log(item)

    return { item };
}

