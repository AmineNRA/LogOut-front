import React, { useState, type ChangeEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import useAuthStore from "@/store"
import { getAuth } from "../api/getAuth";
import { Button } from "@mui/material";

type formData = {
    pseudo: string,
    password: string
}

export default function LoginForm() {

    const { setTokens } = useAuthStore();

    const [formData, setFormData] = useState({
        pseudo: "",
        password: ""
    })

    const [error, setError] = useState("");

    const { mutate } = useMutation({
        mutationFn: (data: formData) => getAuth(data),
        onSuccess: (auth) => {
            if (auth?.id) {
                const { id, token } = auth;
                setTokens(token, id);
                setError("");
            }
        },
        onError: (error) => {
            setError(error.message)
        }
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();
        mutate(formData);
    }

    return (
        <>
            {error.length > 0 ? <div className="text-white text-xl bg-red-500 font-bold text-center my-4 py-1">Pseudo ou mot de passe incorrect</div> : ""}
            <section className="mx-auto">
                <h2 className="text-app-text text-3xl font-bold text-center mb-10">Connexion</h2>
                <form className="my-4 flex flex-col" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2 my-4">
                        <label htmlFor="pseudo" className="text-app-text font-bold">Pseudo :</label>
                        <input
                            type="text"
                            placeholder="Rentrez votre pseudo"
                            required autoComplete="pseudo"
                            name="pseudo"
                            onChange={handleInputChange}
                            aria-required="true"
                            className={`p-1 bg-app-text ${error.length > 0 ? "border-red-500 border-2" : "border-app-border bg-app-text border-2"}`} />
                    </div>
                    <div className="flex flex-col gap-2 ">
                        <label htmlFor="password" className="text-app-text font-bold">Mot de passe : </label>
                        <input type="password"
                            placeholder="Mot de passe"
                            required
                            name="password"
                            onChange={handleInputChange}
                            aria-required="true"
                            className="bg-app-text border-2 p-1" />
                    </div>
                    {/* <button type="submit" className="text-app-text w-30 font-bold border-2 p-1 m-2 bg-app-hover hover:cursor-pointer">Se connecter</button> */}
                    <Button color="primary" variant="contained" sx={{ px: "3rem", my: "2rem" }}
                        type="submit">Se connecter</Button>
                </form>
            </section>
        </>
    )
}