interface RegisterUserBody {
    firstname: string | undefined;
    lastname: string | undefined;
    email: string | undefined;
    password: string | undefined;
}

interface LoginUserBody {
    email: string | undefined;
    password: string | undefined;
}

export const registerUser = async (body: RegisterUserBody) => {
    const response = await fetch("http://localhost:8080/api/user/register", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();
    return data;
}

export const loginUser = async(body: LoginUserBody) => {
    const response = await fetch("http://localhost:8080/api/user/login", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();
    return data;
}