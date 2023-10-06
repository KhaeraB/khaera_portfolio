"use client";
import { getData } from "@/utils/data/api";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";
import useSWR from "swr";
import Image from "next/image";
import Modal from "@/components/modal/Modal";

const Dashboard = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    desc: "",
    image: "",
    giturl: "",
    siteurl: "",
    skills: [""],
  });
  const session = useSession();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { data, mutate, error, isLoading } = useSWR(
    `api/works?adminname=${session?.data?.user?.name}`,
    getData,
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleDelete = async (id: any) => {
    try {
      await fetch(`/api/works/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddTagToFormData = (tagInput: string) => {
    setFormData({
      ...formData,
      skills: [...formData.skills, tagInput],
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await fetch("/api/works", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData, username: session?.data?.user?.name }),
      });
      console.log(formData);
      if (res.status === 201) {
        // Réussite, redirigez ou effectuez d'autres actions
        router.push("/dashboard"); // Par exemple, redirigez vers le tableau de bord après la création réussie
      } else {
        const responseData = await res.json();
        throw new Error(responseData.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!data && isLoading) {
    return (
      <div className="cup">
        <div className="handle"></div>
      </div>
    );
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }
  if (session.status === "authenticated") {
    return (
      <section className="container">
        <div className="px-4">
          <div className="flex flex-row justify-between items-center">
            <div>
              <h1 className="font-bold text-4xl md:text-6xl">
                Tableau de bord
              </h1>
              <hr className="w-16 h-1 my-1 bg-teal-500 border-0 rounded"></hr>
            </div>
            <div>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-300  hover:text-black "
              >
                add project
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <div className="p-1.5 w-full inline-block align-middle">
                <div className="overflow-hidden border rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          Image
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          Titre
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          Categorie
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          Site
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          Github
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                        >
                          Edit
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                          onClick={handleDelete}
                        >
                          Delete
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {isLoading
                        ? "loading"
                        : data.map((item: any) => {
                            return (
                              <tr>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                  <Image
                                    className=" object-cover  bg-slate-300 "
                                    src={item.image}
                                    width={200}
                                    height={300}
                                    alt={item.title}
                                    priority
                                  />
                                </td>
                                <td className="px-6 py-4 text-sm font-semibold text-gray-800  whitespace-nowrap">
                                  {item.title}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                  {item.category}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                  {item.siteurl}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                  {item.giturl}
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                  <a
                                    className="text-green-500 hover:text-green-700"
                                    href="#"
                                  >
                                    Edit
                                  </a>
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                  <button
                                    className="text-red-500 hover:text-red-700"
                                    onClick={() => handleDelete(item._id)}
                                  >
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isModalOpen && (
          <Modal
            openModal={isModalOpen}
            closeModal={closeModal}
            onFormSubmit={handleSubmit}
            onFormChange={handleChange}
            onAddTagToFormData={handleAddTagToFormData}
          />
        )}
      </section>
    );
  }
};

export default Dashboard;
