"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
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
                Hello~ I'm still building this site! Read on to discover the purpose
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
              <h2 className="text-xl text-white/90 mb-4 font-ai">
                {" "}
                I am not a native Chinese speaker.{" "}
              </h2>
              <p className="text-white/80">
                I decided to create this blog to share tips and tricks I've
                learned and document my progress. These notes are all from my{" "}
                <span className="text-pink-300 underline underline-offset-4 decoration-wavy decoration-sky-500 hover:text-sky-500 hover:decoration-fuchsia-500 transition ease-in-out delay-150 hover:cursor-pointer">
                  personal language journal
                </span>{" "}
                since startinng my journey 3 years ago. This means there will be a
                strong emphasis on  <span className="text-pink-300 underline underline-offset-4 decoration-wavy decoration-sky-500 hover:text-sky-500 hover:decoration-fuchsia-500 transition ease-in-out delay-150 hover:cursor-pointer">Taiwanese Mandarin</span> (i.e. Traditional Chinese
                characters, bopomofo), with Simplified Chinese as secondary.{" "}
                <br />
                Finally, there will also be some SWE{" "}
                <span className="text-pink-300 underline underline-offset-4 decoration-wavy decoration-sky-500 hover:text-sky-500 hover:decoration-fuchsia-500 transition ease-in-out delay-150 hover:cursor-pointer">
                  coding projects
                </span>{" "}
                with a concentration on language learning for those moments when
                inspiration just hits and I want to write about it.
              </p>
              <p className="text-white/80 py-10">
                If this sounds remotely interesting to you, feel free to click
                the like button and sign up to get notified when the
                site goes live! <br /> <span className="font-cn">一会见哦～</span>
              </p>
              <h3 className="font-cn">阿猊 &#183; Imani</h3>
              <Image src={floating_computer} alt="floating computer with tea" />
              <EmailSubscriptionForm />
            </div>
          </div>
      </div>
    </section>
  );
}
