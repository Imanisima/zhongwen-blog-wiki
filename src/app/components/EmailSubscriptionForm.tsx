import type { NextPage } from "next";

import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

import { useState } from "react";

import fetcher from "../../utils/fetcher";
import { fadeIn } from "../../utils/variants";

const EmailSubscriptionForm = () => {
  const [entry, setEntry] = useState<{
    user: string;
    email: string;
  }>({ user: "", email: "" });

  const [error, setError] = useState<{
    email: string;
  }>({ email: "" });

  const [loader, setLoader] = useState<boolean>(false);

  const formValidation = (email: string) => {
    let emailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);

    !emailValidation &&
      setError({
        email: `Sorry! Looks like "${email}" is probably not a valid email!`,
      });

    return emailValidation;
  };

  const handleChange = (e: any) => {
    setError({ email: "" });
    const {
      target: { name, value },
    } = e;
    setEntry({ ...entry, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let validation = formValidation(`${entry.email}`);

    if (validation) {
      try {
        setLoader(true);

        const body = JSON.stringify(entry);

          const response = await fetch("/api/route", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body,
        });

        toast.success(
          `Hey ${entry.user}, thank you! See you soon~`
        );
        setEntry({ user: "", email: "" });
        setLoader(false);
      } catch (error) {
        setLoader(false);
        toast.error(`Sorry, ${entry.user}! Something went wrong :( Try again!`);
        console.log(error);
      }
    }
  };

  return (
    <div className="px-2 mx-2">

      {/* form */}
      <motion.form
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        className="border rounded-2xl py-10 px-10 w-full items-start"
        viewport={{ once: false, amount: 0.3 }}
        onSubmit={handleSubmit}
      >

        <div className="my-2 py-2 text-left lg:text-center">
          <h2>Get notified when the site goes live! <span className="h-7 w-7" role="img" aria-label="excited">
                  😍
                </span>
            </h2>
        </div>

        <div className="flex-1 flex flex-col lg:flex-row gap-y-6 gap-x-6 ">
          <input
            className="bg-transparent border-b border-x-0 border-t-0 py-3 outline-none w-full placeholder:text-white focus:border-b-fuchsia-200 focus:outline-none focus:ring-0 transition-all"
            required
            name="user"
            type="text"
            placeholder="Your name *"
            value={entry.user}
            onChange={handleChange}
          />
          <input
            className="bg-transparent border-b border-x-0 border-t-0 py-3 outline-none w-full placeholder:text-white focus:border-b-fuchsia-200 focus:outline-none focus:ring-0 transition-all"
            required
            name="email"
            type="email"
            placeholder="Your email *"
            value={entry.email}
            onChange={handleChange}
          />

          <div className="justify-end">
            <button
              className="p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white"
              disabled={entry.user.length < 2 || entry.email.length < 2}
              value="Send"
              // onClick={handleSubmit}
              type="submit"
            >
              <span className="relative px-5 py-2 hover:cursor-pointer transition-all ease-in duration-75 bg-[#121212] rounded-md group-hover:bg-opacity-0">
                Submit
              </span>
            </button>
          </div>
        </div>
      </motion.form>
    </div>
  );
};

export default EmailSubscriptionForm;
