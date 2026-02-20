"use client";

// import Link from "next/link";
import FooterForm from "./FooterForm";
// const NAV_COLUMNS = [
//   {
//     links: [
//       { href: "/", label: "Accessibility Statement" },
//       { href: "#", label: "Privacy Policy" },
//     ],
//   },
// ];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F1113] text-[#F2F2F2] border-t border-white/5" id="contact-us">
      <div className="max-w-screen w-full mx-auto md:p-10 p-6">
        <h2 className="sm:hidden mb-8">
          <i> Join our Waitlist </i>
        </h2>
        <h1 className="mb-8 hidden sm:block">
          <i> Join our Waitlist </i>
        </h1>
        <div className="grid md:grid-cols-2 gap-12 pb-12">
          <div>
            <FooterForm />
          </div>

          <div className="flex flex-col mt-auto sm:place-items-end justify-baseline text-white font-light text-sm ">
            <div>
              {/* <ul className="">
                {NAV_COLUMNS[0].links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="underline">
                      <h4>{link.label}</h4>
                    </Link>
                  </li>
                ))}
              </ul> */}
              <div className="my-6 space-y-2">
                <h4 className="text-sm font-medium text-[#F2F2F2]">
                  +234 810 850 3866
                </h4>
                <h4 className="text-sm font-medium text-[#AAAAAA]">Lagos state, Nigeria.</h4>
              </div>
              <div className="my-6">
                <h4>© {year} by LyteLabs</h4>
                <h4>Powered and secured by Engineering Team</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
