"use client";

import axios from "axios";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "../../../../redux/userSlice";

export default function Callback() {

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {

    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      login(code);
    }

  }, []);

  const login = async (code: string) => {

    try {

      const res = await axios.post(
        "http://localhost:5000/api/linkedin",
        { code }
      );

      console.log(res.data);
      
      // Redux store mein user data save karo
      dispatch(setUser(res.data));

      router.push("/profile");

    } catch (error) {

      console.log(error);

    }

  };

  return <div className="flex justify-center items-center h-screen text-xl">Logging in...</div>;

}