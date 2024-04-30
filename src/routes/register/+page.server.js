/** @type {import('./$types').Actions} */
import { error } from '@sveltejs/kit';
import { fail } from '@sveltejs/kit';
import { PUBLIC_BACKEND_URL } from '$env/static/public';


export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const data = {
            username: formData.get('username')?.toString().toLowerCase(),
            password: formData.get('password'),
            realname: formData.get('username'),
            email: formData.get('email')
        };
        const response = await fetch(PUBLIC_BACKEND_URL + "/register/submit", {
            method: 'POST',
            headers: new Headers({ 'content-type': 'application/json' }),
            body: JSON.stringify(data)
        })
        const responseContent = await response.json()
        console.log(responseContent)
        if (responseContent.usernameTaken = true) {
            return fail(400, {
                userAlreadyExists: true
            });
        }
        if (responseContent.emailTaken = true) {
            return fail(400, {
                emailAlreadyUsing: true
            });
        }

    }

};
