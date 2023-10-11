"use client";
import { getData } from "@/utils/data/api";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import useSWR from "swr";
import Image from "next/image";
import Modal from "@/components/modal/Modal";

export interface FormDataProps {
  title: string;
  category: string;
  desc: string;
  image: string;
  giturl: string;
  siteurl: string;
  skills: string[];
  mocks: string[];
}

const Dashboard = () => {
  const initialFormData: FormDataProps = {
    title: "",
    category: "",
    desc: "",
    image: "",
    giturl: "",
    siteurl: "",
    skills: [],
    mocks: [],
  };
  const [formData, setFormData] = useState({ ...initialFormData });

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

  // const handleEdit = async (id: any) => {
  //   try {
  //     await fetch(`/api/works/${id}`, {
  //       method: "UPDATE",
  //     });
  //     mutate();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
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

  const handleAddTagToFormData = (
    tagInput: string,
    isMock: boolean = false,
  ) => {
    setFormData((prevData) => {
      if (isMock && tagInput.trim() !== "") {
        return {
          ...prevData,
          mocks: [...prevData.mocks, tagInput],
        };
      } else {
        return {
          ...prevData,
          skills: [...prevData.skills, tagInput],
        };
      }
    });
  };

  const handleAddMocksToFormData = (tagInput: string) => {
    handleAddTagToFormData(tagInput, true);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const title = formData.get("title") as string;
    const category = formData.get("category") as string;
    const desc = formData.get("desc") as string;
    const image = formData.get("image") as string;
    const giturl = formData.get("giturl") as string;
    const siteurl = formData.get("siteurl") as string;
    // Récupérer les compétences et les maquettes
    const skillsInput = formData.get("skills") as string;
    const mocksInput = formData.get("mocks") as string;
    // Vérification si les valeurs ne sont pas nulles
    const skills = skillsInput
      ? skillsInput.split(",").map((skill) => skill.trim())
      : [];
    const mocks = mocksInput
      ? mocksInput.split(",").map((mock) => mock.trim())
      : [];

    try {
      await fetch("/api/works", {
        method: "POST",
        body: JSON.stringify({
          title,
          category,
          desc,
          image,
          giturl,
          siteurl,
          skills,
          mocks,
          adminname: session.data?.user?.name,
        }),
      });
      mutate();

      setFormData(initialFormData);
      closeModal();
    } catch (err) {
      console.error(err);
    }
    console.log(formData);
  };

  if (error) {
    return <div>Error loading data</div>;
  } else if (!data && isLoading) {
    return (
      <div className="cup">
        <div className="handle"></div>
      </div>
    );
  } else if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  } else if (session.status === "authenticated") {
    return (
      <section className="container ">
        <div className="px-4">
          <div className="flex flex-row justify-between items-center">
            <div>
              <h1 className="font-bold text-4xl md:text-6xl dark:text-white">
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
                        : data?.map((item: any) => {
                            return (
                              <tr key={item._id}>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                  <Image
                                    className=" object-cover  bg-slate-300 w-auto h-auto"
                                    src={item.image}
                                    width={200}
                                    height={300}
                                    alt={item.title}
                                    priority
                                  />
                                </td>
                                <td className="px-6 py-4 text-sm font-semibold dark:text-white  whitespace-nowrap">
                                  {item.title}
                                </td>
                                <td className="px-6 py-4 text-sm dark:text-white whitespace-nowrap">
                                  {item.category}
                                </td>
                                <td className="px-6 py-4 text-sm dark:text-white whitespace-nowrap">
                                  {item.siteurl}
                                </td>
                                <td className="px-6 py-4 text-sm dark:text-white whitespace-nowrap">
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
            onAddItemToFormData={handleAddTagToFormData}
            onAddImageToForData={handleAddMocksToFormData}
          />
        )}
      </section>
    );
  }
};

export default Dashboard;
