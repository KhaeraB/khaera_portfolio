"use client";
import { getData } from "@/utils/data/api";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import Image from "next/image";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const { data, error, isLoading } = useSWR(
    `api/works?adminname=${session?.data?.user?.name}`,
    getData,
  );
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
          <h1 className="font-bold text-4xl md:text-6xl">Tableau de bord</h1>
          <hr className="w-16 h-1 my-1 bg-teal-500 border-0 rounded"></hr>

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
                          ID
                        </th>
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
                          Categorie
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
                        >
                          Delete
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {data.map((item: any) => {
                        return (
                          <tr>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                              {item._id}
                            </td>
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
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              {item.category}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              {item.title}
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
                              <a
                                className="text-red-500 hover:text-red-700"
                                href="#"
                              >
                                Delete
                              </a>
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
      </section>
    );
  }
};

export default Dashboard;
