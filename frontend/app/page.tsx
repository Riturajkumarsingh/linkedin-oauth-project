"use client";

export default function Home() {

const clientId = "86vfn3qd1u8euo";

const redirectUri = "http://localhost:3000/auth/linkedin/callback";

const login = () => {

const url =
`https://www.linkedin.com/oauth/v2/authorization
?response_type=code
&client_id=${clientId}
&redirect_uri=${redirectUri}
&scope=openid%20profile%20email`;

window.location.href = url;

};

return (

<div className="flex justify-center items-center h-screen">

<button
onClick={login}
className="bg-blue-600 text-white px-6 py-3 rounded-lg"
>

Login with LinkedIn

</button>

</div>

);

}