"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [error, setError] = useState<Error | null>(null);

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setError(err as Error);
      console.log(err);
    }
  };

  return (
    <div className="w-full max-w-xs flex flex-col m-auto justify-center text-center">
      <h1 className="text-2xl font-bold mb-2">Create an Account</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-center"
      >
        <input
          type="text"
          placeholder="Username"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input
          type="text"
          placeholder="Email"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white justify-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Register
        </button>
        {error && (
          <p className="text-red-500 text-xs italic">Something went wrong!</p>
        )}
      </form>
      <Link
        href="/dashboard/login"
        className="block mt-2 text-sm text-center text-blue-500 hover:text-blue-800"
      >
        Login with an existing account
      </Link>
    </div>
  );
};

export default Register;
