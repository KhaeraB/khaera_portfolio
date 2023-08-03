import React from "react";
import Image from "next/image";
const Contact = () => {
  return (
    <div className="mt-20 md:mt-36 ">
      <h1 className="text-center font-bold text-4xl">
        Contactez-moi
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
        <div className="text-center md:w-1/2 md:text-left md:animate-wave">
          <Image
            src="/images/HeroContact.svg"
            alt="hero Contact"
            width={500}
            height={500}
            className="rounded-2xl"
          />
        </div>
        <div className="md:w-1/2 ">
          <h2 className="text-center text-2xl font-bold mb-6 md:text-left">
            Restons en Contact
          </h2>
          <form action="#" className="space-y-8">
            <div>
              <input
                type="email"
                id="email"
                aria-placeholder="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@entreprise.com"
                required
              />
            </div>
            <div>
              <input
                type="text"
                id="subject"
                aria-placeholder="sujet"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Dites-moi comment je peux vous aider"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-teal-500 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
