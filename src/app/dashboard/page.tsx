"use client";
import { getData } from "@/utils/data/api";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import useSWR from "swr";
import Image from "next/image";
import ModalAdd from "@/components/modal/ModalAdd";
import ModalEdit from "@/components/modal/ModalEdit";

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

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProjectData, setSelectedProjectData] = useState(null);

  const closeModal = () => {
    setIsAddModalOpen(false);
  };
  const closeEditModal = () => {
    setIsEditModalOpen(false);
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

  const handleEdit = async (id: any) => {
    const title = formData.title;
    const category = formData.category;
    const desc = formData.desc;
    const image = formData.image;
    const giturl = formData.giturl;
    const siteurl = formData.siteurl;

    const skills = formData.skills;
    const mocks = formData.mocks;
    try {
      await fetch(`/api/works/${id}`, {
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

      setSelectedProjectData(id);
      setIsEditModalOpen(true);
      closeModal();
    } catch (err) {
      console.error(err);
    }
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

  const handleSkillsAdd = (newSkills: string[]) => {
    setFormData((prevData) => ({
      ...prevData,
      skills: newSkills,
    }));
  };

  const handleMocksAdd = (newMocks: string[]) => {
    setFormData((prevData) => ({
      ...prevData,
      mocks: newMocks,
    }));
  };

  const handleSkillsEdit = (newSkills: string[]) => {
    setFormData((prevData) => ({
      ...prevData,
      skills: newSkills,
    }));
  };

  const handleMocksEdit = (newMocks: string[]) => {
    setFormData((prevData) => ({
      ...prevData,
      mocks: newMocks,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const title = formData.title;
    const category = formData.category;
    const desc = formData.desc;
    const image = formData.image;
    const giturl = formData.giturl;
    const siteurl = formData.siteurl;

    const skills = formData.skills;
    const mocks = formData.mocks;

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
                onClick={() => setIsAddModalOpen(true)}
                data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-300  hover:text-black "
              >
                Ajouter un projet
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
                          Voir
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                        >
                          Editer
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                          onClick={handleDelete}
                        >
                          Supprimer
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
                                    className=" object-cover  bg-slate-300  h-auto"
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
                                    className="text-blue-500 hover:text-blue-700"
                                    href={`/portfolio/${encodeURIComponent(
                                      item._id,
                                    )}`}
                                  >
                                    Voir
                                  </a>
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                  <a
                                    className="text-green-500 hover:text-green-700"
                                    onClick={() => handleEdit(item._id)} // Appel de la fonction handleEdit avec l'ID du projet
                                  >
                                    Editer
                                  </a>
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                  <button
                                    className="text-red-500 hover:text-red-700"
                                    onClick={() => handleDelete(item._id)}
                                  >
                                    Supprimer
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
        {isAddModalOpen && (
          <ModalAdd
            openModal={isAddModalOpen}
            closeModal={closeModal}
            onFormSubmit={handleSubmit}
            onFormChange={handleChange}
            onAddItemToFormData={handleSkillsAdd}
            onAddImageToForData={handleMocksAdd}
          />
        )}
        {isEditModalOpen && (
          <ModalEdit
            openModal={isEditModalOpen}
            closeModal={closeEditModal}
            onFormSubmit={handleSubmit}
            onFormChange={handleChange}
            onEditItemToFormData={handleSkillsEdit}
            onEditImageToForData={handleMocksEdit}
            onAddItemToFormData={handleSkillsEdit}
            onAddImageToForData={handleMocksEdit}
            editedProjectData={formData}
          />
        )}
      </section>
    );
  }
};

export default Dashboard;
