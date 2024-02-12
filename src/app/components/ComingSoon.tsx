"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";

import LikeButton from "./LikeButton";
import floating_computer from "../../../public/images/floating_computer.gif";
import EmailSubscriptionForm from "./EmailSubscriptionForm";

export default function ComingSoon() {
  return (
    <section className="section pb-10" id="ComingSoon">
      <div className="container mx-auto">
        <div className="flex flex-col border border-fuchsia-700 rounded-xl mx-5 px-2 py-5 lg:mx-20 lg:px-5 lg:py-10">
          {/* like button */}
          <div className=" px-3 py-1 md:px-1 flex justify-end">
            <LikeButton />
          </div>

            <div className="place-self-center leading-8 lg:leading-[2.5rem] text-center max-w-3xl px-2 mx-2 lg:px-5 my-5 border border-fuchsia-700 rounded-xl animate-pulse">
              <p className="text-white/80 ">
                Hello~ I'm still working on this site! Read on to learn the purpose
                of this blog.{" "}
                <span className="h-7 w-7" role="img" aria-label="point-down">
                  👇🏽
                </span>
              </p>
            </div>

            <div className="place-self-center leading-8 lg:leading-[2.5rem] text-center max-w-3xl px-2 mx-2 lg:px-5 mb-5 text-md lg:text-lg">
              <h1 className="text-2xl font-ai mb-4 text-gradient px-1 py-10 hover:cursor-pointer scale-120 translate-x-4 skew-y-3">
                Not your typical chinese language blog...
              </h1>
              {/* <h2 className="text-xl text-white/90 mb-4 font-ai">
                {" "}
                I am not a native Chinese speaker.{" "}
              </h2> */}
              <motion.p
              variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
               className="text-white/80">
                Although I've studied many languages in the past, I could never seem to give up on Chinese. Something about it is so captivating. From the tones and characters, to the culture and music... The truth is at this point I just want to talk with the owner at my favorite noodle shop and play Mahjong. <span className="h-7 w-7" role="img" aria-label="don't judge me">🤷🏽‍♀️</span>. So, I decided to create this blog. Not only to share any tips and tricks I've
                picked up so far, but to also boost my motivation for continuing to study. These notes are all from a{" "}
                <span className="text-pink-300 underline underline-offset-4 decoration-wavy decoration-sky-500 hover:text-sky-500 hover:decoration-fuchsia-500 transition ease-in-out delay-150 hover:cursor-pointer">
                  personal language journal
                </span>{" "}
                since I began this journey 3 years ago. 
              </motion.p>

              <br />
                
              <motion.p
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
               className="text-white/80">
                This means there will be a
                strong emphasis on  <span className="text-pink-300 underline underline-offset-4 decoration-wavy decoration-sky-500 hover:text-sky-500 hover:decoration-fuchsia-500 transition ease-in-out delay-150 hover:cursor-pointer">Taiwanese Mandarin</span> (i.e. Traditional Chinese
                characters, bopomofo), with Simplified Chinese as secondary.{" "}
                <br />
                Finally, there will also be some SWE{" "}
                <span className="text-pink-300 underline underline-offset-4 decoration-wavy decoration-sky-500 hover:text-sky-500 hover:decoration-fuchsia-500 transition ease-in-out delay-150 hover:cursor-pointer">
                  coding projects
                </span>{" "}
                for those moments when
                inspiration just hits and I want to write about it. So, this blog will be a blend between chinese language learning and tech.
              </motion.p>

              <motion.p
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.4 }}
               className="text-white/80 py-10">
                If this sounds remotely interesting to you, feel free to click
                the like button and sign up to get notified when the
                site goes live! <br /> <span className="font-cn">一会见哦～</span>
              </motion.p>

              <motion.div
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.5 }}
              >
                <h3 className="font-cn">阿猊 &#183; Imani</h3>
                <Image src={floating_computer} alt="floating computer with tea" />
                <EmailSubscriptionForm />
              </motion.div>
            </div>
          </div>
      </div>
    </section>
  );
}
