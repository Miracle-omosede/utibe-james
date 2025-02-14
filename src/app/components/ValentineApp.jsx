"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion"; // Changed from "motion/react" to "framer-motion"
import Image from "next/image";
import utee from "./utee.webp";
import buddies from "./buddies.webp";

const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } },
};

const ValentineApp = () => {
  const [step, setStep] = useState(1);
  const [countdown, setCountdown] = useState(5);
  const [showFinalPage, setShowFinalPage] = useState(false);

  const nextStep = () => setStep((prev) => prev + 1);

  useEffect(() => {
    if (step === 8) {
      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            clearInterval(interval);
            setShowFinalPage(true);
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [step]);

  useEffect(() => {
    if (showFinalPage) {
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ["#ff0000", "#ff66b2", "#ffcc00", "#ffffff"],
      });
    }
  }, [showFinalPage]);

  return (
    <div className="flex bg-[#111] flex-col justify-center items-center h-screen text-center px-5 font-poppins">
      {!showFinalPage ? (
        <motion.div
          key={step}
          variants={fadeInAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full"
        >
          {step === 8 ? (
            <div className="flex flex-col items-center justify-center">
              <Image
                src={utee}
                width={250}
                height={250}
                alt="Utibe"
                className="w-full max-w-[250px] rounded-lg shadow-lg"
              />
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                Countdown begins... ⏳
              </h1>
              <p className="text-lg md:text-2xl text-red-400 font-semibold">
                {countdown}
              </p>
            </div>
          ) : (
            <>
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                {step === 1 && "Hello Utibe! 😊💕"}
                {step === 2 && "So yeah..."}
                {step === 3 && "I was wondering..."}
                {step === 4 && "Me and my baby (my PC) 👨‍💻"}
                {step === 5 && "It was gonna be a game 🎮"}
                {step === 6 && "Using my last energy ⚡️"}
                {step === 7 && (
                  <span className="flex items-center justify-center gap-2">
                    Almost there...{" "}
                    <Sparkles className="text-yellow-400 animate-spin" />
                  </span>
                )}
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 mt-3">
                {step === 1 &&
                  "Yesssss! I am no longer in your office... \n I'm now in your phone! 📱✨"}
                {step === 2 &&
                  "This boy is bugging you a whole lot, right? 🤔😂"}
                {step === 3 &&
                  "I don't do Valentine’s ❤️, but my friend loves it... \n so I'm making it special in my own way! 😎🎉"}
                {step === 4 &&
                  "We decided to make something for you... 💡🚀"}
                {step === 5 &&
                  "But I'm too tired 🥱, sooooooo... \n Here's this instead! 💝"}
                {step === 6 &&
                  "To make something speciallllllllllllll for you! 😍💖"}
                {step === 7 && "Just wait a little... ⏳"}
              </p>
            </>
          )}

          {step < 8 && (
            <motion.button
              onClick={nextStep}
              whileTap={{ scale: 0.9 }}
              className="mt-10 px-6 py-3 m-10 rounded-full bg-red-500 text-white text-lg font-semibold shadow-md hover:bg-red-600 transition absolute bottom-10 right-0 flex items-center gap-1"
            >
              <span>Next</span>
              <ArrowRight />
            </motion.button>
          )}
        </motion.div>
      ) : (
        <motion.div
          variants={fadeInAnimation}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center justify-center h-screen"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-red-500 animate-pulse">
            Happy Valentine’s Day, Utee! ❤️🎉
          </h1>
          <Image
            src={buddies}
            width={250}
            height={250}
            alt="Buddies"
            className="w-full max-w-[250px] rounded-lg shadow-lg"
          />
        </motion.div>
      )}
    </div>
  );
};

export default ValentineApp;
