"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<Error | null>(null);

  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value.toLowerCase(),
    });
    if (name === "name") {
      const nameRegex = /^[a-zA-Z\s]+$/;
      if (!nameRegex.test(value)) {
        setErrors({
          ...errors,
          name: "Name is not valid",
        });
      } else {
        setErrors({
          ...errors,
          name: "",
        });
      }
    }
    if (name === "email") {
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
      if (!emailRegex.test(value)) {
        setErrors({
          ...errors,
          email: "Email is not valid",
        });
      } else {
        setErrors({
          ...errors,
          email: "",
        });
      }
    }

    if (name === "password") {
      const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/;
      if (!passwordRegex.test(value)) {
        setErrors({
          ...errors,
          password:
            "Password should contain at least 8 characters, one uppercase letter, one number, and one special character.",
        });
      } else {
        setErrors({
          ...errors,
          password: "",
        });
      }
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(errors).some((error) => !!error)) {
      return;
    }
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(res.statusText);
      if (res.status === 201) {
        router.push("/dashboard/login?success=Account has been created");
      } else {
        const responseData = await res.json();
        throw new Error(responseData.message);
      }
    } catch (err: any) {
      setError(err.message);
      console.error(err);
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
          name="name"
          placeholder="Adminname"
          required
          className={`shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.name && "border-red-500"
          }`}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          required
          className={`shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.email && "border-red-500"
          }`}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className={`shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.password && "border-red-500"
          }`}
          onChange={handleChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white justify-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          disabled={Object.values(errors).some((error) => !!error)} // Désactive le bouton si une erreur est présente
        >
          Register
        </button>
        {Object.values(errors).some((error) => !!error) && (
          <p className="text-red-500 text-xs italic">
            Please fix the errors before submitting.
          </p>
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
