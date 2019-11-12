import React from "react";
import { Head } from "react-static";

export default function NotFound() {
    return (
        <>
            <Head>
                <title>{"Pagina non trovata"}</title>
                <meta name="description" content="Pagina non trovata"></meta>
            </Head>
            {"Pagina non trovata"}
        </>
    );
}
