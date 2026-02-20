"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { AnimatedNavLink } from "./animations";

gsap.registerPlugin(ScrollTrigger);

const SECTIONS = [
  { id: "hero", label: "Home", path: "/" },
  { id: "feature", label: "Features", path: "/#feature" },
  { id: "about", label: "About", path: "/#about" },
  // { id: "testimonials", label: "Testimonials", path: "/#testimonials" },
  { id: "cta", label: "Contact Us", path: "/#contact-us" },
];

export default function AnimatedNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Scroll highlight logic
  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [mobileOpen]);

  // Close mobile menu on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileOpen) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileOpen]);

  useEffect(() => {
    if (!isMounted) return;
    const triggers: ScrollTrigger[] = [];
    SECTIONS.forEach(({ path }) => {
      if (path.startsWith("/#")) {
        const sectionId = path.substring(2); // Remove "/#" prefix
        const element = document.getElementById(sectionId);
        if (element) {
          triggers.push(
            ScrollTrigger.create({
              trigger: element,
              start: "top center",
              end: "bottom center",
              onEnter: () => highlightLink(path),
              onEnterBack: () => highlightLink(path),
            })
          );
        }
      }
    });
    return () => triggers.forEach((t) => t.kill());
  }, [isMounted]);

  const highlightLink = (path: string) => {
    if (!navRef.current) return;
    const links = navRef.current.querySelectorAll("a");
    links.forEach((link) => {
      link.classList.toggle("text-[#B6FF1A]", link.getAttribute("href") === path);
    });
  };

  const navbarClass =
    isMounted && scrolled
      ? "bg-[#0F1113]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl py-2"
      : "bg-transparent py-4 text-[#F2F2F2]";

  return (
    <nav
      ref={navRef}
      className={`fixed w-full top-0 z-50 transition-all font-extralight text-sm ${navbarClass}`}
    >
      <div className="container mx-auto flex items-center justify-between p-3">
        <Link href="/" className="flex flex-1 items-center space-x-2 sm:space-x-4">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 overflow-hidden rounded-lg">
            <Image
              src="/stride_icon.png"
              alt="Stride EV Logo"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-base sm:text-lg lg:text-xl font-black tracking-tight italic">STRIDE <span className="text-[#F2F2F2]/80">EV</span></p>
        </Link>

        {/* Desktop Nav - Hide Home link */}
        <div className="hidden md:flex space-x-6 lg:space-x-12">
          {SECTIONS.map(({ id, label, path }) => {
            // Hide Home link on desktop
            if (id === "hero") return null;

            return path.startsWith("/#") ? (
              <AnimatedNavLink
                key={id}
                href={path}
                label={label}
                className="hover:text-white transition-colors duration-300 text-xs lg:text-sm px-2 py-1 font-bold tracking-[0.2em] uppercase"
              />
            ) : (
              <Link
                key={id}
                href={path}
                className="hover:text-white transition-colors duration-300 text-xs lg:text-sm px-2 py-1 font-bold tracking-[0.2em] uppercase"
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors duration-200"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X size={28} className="sm:w-8 sm:h-8" />
          ) : (
            <Menu size={28} className="sm:w-8 sm:h-8" />
          )}
        </button>
      </div>

      {/* Mobile Fullscreen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99999] bg-[#0F1113] text-[#F2F2F2] flex flex-col items-center justify-start p-4 sm:p-8"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
            }}
          >
            <div className="flex w-full items-center justify-between mb-8 sm:mb-12">
              <Link
                href="/"
                className="flex items-center space-x-4"
                onClick={() => setMobileOpen(false)}
              >
                <div className="relative w-12 h-12 overflow-hidden rounded-xl border border-white/20 shadow-xl">
                  <Image
                    src="/stride_icon.png"
                    alt="Stride EV Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xl font-black tracking-tight italic">STRIDE <span className="text-[#F2F2F2]/80">EV</span></p>
              </Link>
              <button
                className="p-2 rounded-md hover:bg-white/10 transition-colors duration-200"
                onClick={() => setMobileOpen(false)}
                aria-label="Toggle menu"
              >
                <X size={32} />
              </button>
            </div>

            {/* Mobile Navigation Links - Show all including Home */}
            <div className="flex flex-col items-center space-y-6 sm:space-y-8 w-full max-w-xs">
              {SECTIONS.map(({ id, label, path }) =>
                path.startsWith("/#") ? (
                  <AnimatedNavLink
                    key={id}
                    href={path}
                    label={label}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg sm:text-xl font-medium transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/10 w-full text-center"
                  />
                ) : (
                  <Link
                    key={id}
                    href={path}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg sm:text-xl font-medium transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/10 w-full text-center"
                  >
                    {label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
