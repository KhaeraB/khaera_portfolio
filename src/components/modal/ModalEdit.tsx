import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import TagInput from "../TagInput/TagInput";
// import { IWork } from "@/models/Work";
import { FormDataProps } from "@/app/dashboard/page";
import { getData } from "@/utils/data/api";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import useSWR from "swr";

interface ModalProps {
  openModal: boolean;
  closeModal: () => void;
  onFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onFormChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onEditItemToFormData: (tags: string[], field: string) => void;
  onEditImageToForData: (tags: string[], field: string) => void;
  onAddItemToFormData: (tags: string[], field: string) => void;
  onAddImageToForData: (tags: string[], field: string) => void;
  editedProjectData: {
    title: string;
    category: string;
    desc: string;
    image: string;
    giturl: string;
    siteurl: string;
    skills: string[];
    mocks: string[];
  };
}
const ModalEdit: React.FC<ModalProps> = ({
  closeModal,
  onFormSubmit,
  onFormChange,
  onEditImageToForData,
  onEditItemToFormData,
  onAddItemToFormData,
  onAddImageToForData,
  editedProjectData,
}) => {
  const session = useSession();
  const formRef = useRef<HTMLFormElement>(null);
  const { data, mutate, error, isLoading } = useSWR(
    `api/works?adminname=${session?.data?.user?.name}`,
    getData,
  );
  editedProjectData = data.find((item: { _id: any }) => item._id);
  console.log(editedProjectData);
  return (
    <>
      <div
        id="authentication-modal"
        tabIndex={-1}
        aria-hidden="true"
        className="bg-gradient-to-t from-slate-500 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-full max-w-lg max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="authentication-modal"
              onClick={closeModal}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Editer le projet
              </h3>
              <form className="space-y-6" ref={formRef} onSubmit={onFormSubmit}>
                <div>
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Titre
                  </label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    autoComplete="current-title"
                    value={editedProjectData.title}
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Titre"
                    onChange={onFormChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Catégorie
                  </label>
                  <input
                    id="category"
                    name="category"
                    type="text"
                    autoComplete="current-category"
                    value={editedProjectData.category}
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Categorie"
                    onChange={onFormChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="desc"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description
                  </label>
                  <input
                    id="desc"
                    name="desc"
                    autoComplete="current-text"
                    value={editedProjectData.desc}
                    type="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Description du projet"
                    onChange={onFormChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="image"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Image
                  </label>
                  <input
                    id="image"
                    name="image"
                    type="text"
                    autoComplete="current-image"
                    value={editedProjectData.image}
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Lien de l'image"
                    onChange={onFormChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="mocks"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Autres Images
                  </label>
                  <div className="min-w-[50%] border-2 border-gray-300 rounded-md mt-4">
                    <TagInput
                      name="mocks"
                      tags={editedProjectData.mocks}
                      onEdit={editedProjectData}
                      onSave={(tags) => onAddImageToForData(tags, "mocks")}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="giturl"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Github
                  </label>
                  <input
                    id="giturl"
                    name="giturl"
                    type="text"
                    autoComplete="current-giturl"
                    value={editedProjectData.giturl}
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Lien du Github"
                    onChange={onFormChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="siteurl"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Site
                  </label>
                  <input
                    id="siteurl"
                    name="siteurl"
                    type="text"
                    autoComplete="current-siteurl"
                    value={editedProjectData.siteurl}
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Lien du site"
                    onChange={onFormChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="skills"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Skills
                  </label>
                  <div className="min-w-[50%] border-2 border-gray-300 rounded-md mt-4">
                    <TagInput
                      name="skills"
                      tags={editedProjectData.skills}
                      onEdit={editedProjectData}
                      onSave={(tags) => onAddItemToFormData(tags, "skills")}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Créer
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalEdit;
