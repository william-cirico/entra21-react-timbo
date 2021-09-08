const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";
const REFRESH_TOKEN = "eyJhbGciOi234sadSIsInR5cCI6IkpXVCJ9";

function login(email, password) {
    return new Promise((resolve, reject) => {        
        setTimeout(() => {
            if (email === "teste@email.com" && password === "123456") {
                resolve({
                    accessToken: ACCESS_TOKEN,
                    refreshToken: REFRESH_TOKEN,
                    role: "student"
                });
            }
            
            reject(new Error("E-mail ou senha inválidos"));
        }, 500);
    });
}

function verify(accessToken) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {            
            if (accessToken === ACCESS_TOKEN) {
                resolve({ role: "student" });
            }
            reject(new Error("access-token inválido"));
        }, 500);        
    });
}

function refresh(refreshToken) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (refreshToken === "eyJhbGciOi234sadSIsInR5cCI6IkpXVCJ9") {
                resolve({ 
                    newAccessToken: ACCESS_TOKEN,
                    newRefreshToken: REFRESH_TOKEN,
                    role: "student"
                });
            }
            reject("refresh-token inválido");
        }, 500);        
    });
}

function logout() {
    localStorage.removeItem("access-token");
}

export const authServices = { 
    login,
    verify,
    refresh,
    logout,
}
