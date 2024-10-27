// create a server action to handle the form submission of the mailing list form
"use server"

import { getRequestContext } from "@cloudflare/next-on-pages";

const db = getRequestContext().env.MY_D1;

export async function handleSubscribeMailingList(prevState: any, formData: FormData) {
    // your server-side logic here
    const email = formData.get("email") as string;
    if (!email) {
        return { error: "Email is required" }
    } else if (!email.includes("@")) {
        return { error: "Invalid email" }
    }

    try {
        const stmt = db.prepare("INSERT INTO mailing_list (email) VALUES (?)").bind(email);
        const { success } = await stmt.run();
        if (success) {
            return { success: "Subscribed successfully!" }
        } else {
            return { error: "An error occurred, please try again later." }
        }
    } catch (e) {
        console.error(e);
        return { error: "Email already exists in the mailing list" }
    }
}