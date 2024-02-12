import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footeer container py-10">
      <div className="border-t border-fuchsia-500/30 flex flex-1 flex-col md:flex-row text-white/80 justify-center">
        <div className="mt-5 text-center max-w-3xl px-3 md:px-5">
          {/* <p>Interesting Stories | Updates | Guides</p> */}
          {/* <p>Subscribe to learn about chinese study tips and stay up to date on the latest news.</p> */}
          <p>
            <Link
              href="https://nodeteas.com"
              target="_blank"
              className="hover:text-fuchsia-500"
            >
              © {currentYear} NodeTeas
            </Link>
            . All rights reserved.
          </p>
          <br />
          <Link
            href="https://nodeteas.com"
            target="_blank"
            className="hover:text-fuchsia-500"
          >
            Made with ❤ by NodeTeas
          </Link>{" "}
          &#183; {" "}
          <Link
            href="https://www.nodeteas.com/freelance-design-inquiry"
            target="_blank"
            className="hover:text-fuchsia-500"
          >
            Hire me for creative work!
          </Link>
        </div>
      </div>
    </footer>
  );
}
