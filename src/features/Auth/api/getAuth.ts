

type formData = {
    pseudo: string,
    password: string
}


export const getAuth = async (formData: formData) => {
    const response = await fetch(`${import.meta.env.VITE_API_BACKEND}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    });
    const data = await response.json();
    return data;
}
