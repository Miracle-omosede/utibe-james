"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { motion } from "motion/react";
import Image from "next/image";
import utee from "./utee.webp";
import buddies from "./buddies.webp"

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

  // 🎉 Trigger confetti when the final page appears
  useEffect(() => {
    if (showFinalPage) {
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 }, // Starts lower for a realistic effect
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
          {step === 1 && (
            <>
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                Hello Utibe! 😊💕
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 mt-3">
                Yesssss! I am no longer in your office... <br /> I'm now in your phone! 📱✨
              </p>
            </>
          )}

          {step === 2 && (
            <>
              <h1 className="text-3xl md:text-5xl font-bold text-red-500">
                So yeah...
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 mt-3">
                This boy is bugging you a whole lot, right? 🤔😂
              </p>
            </>
          )}

          {step === 3 && (
            <>
              <h1 className="text-3xl md:text-5xl font-bold text-red-500">
                I was wondering...
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 mt-3">
                I don't do Valentine’s ❤️, but my friend loves it... <br /> so I'm making it special in my own way! 😎🎉
              </p>
            </>
          )}

          {step === 4 && (
            <>
              <h1 className="text-3xl md:text-5xl font-bold text-red-500">
                Me and my baby (my PC) 👨‍💻
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 mt-3">
                We decided to make something for you... 💡🚀
              </p>
            </>
          )}

          {step === 5 && (
            <>
              <h1 className="text-3xl md:text-5xl font-bold text-red-500">
                It was gonna be a game 🎮
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 mt-3">
                But I'm too tired 🥱, sooooooo... <br /> Here's this instead! 💝
              </p>
            </>
          )}

          {step === 6 && (
            <>
              <h1 className="text-3xl md:text-5xl font-bold text-red-500">
                Using my last energy ⚡️
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 mt-3">
                To make something speciallllllllllllll for you! 😍💖
              </p>
            </>
          )}

          {step === 7 && (
            <>
              <h1 className="text-4xl md:text-6xl font-bold text-white flex items-center justify-center gap-2">
                Almost there... <Sparkles className="text-yellow-400 animate-spin" />
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 mt-3">
                Just wait a little... ⏳
              </p>
            </>
          )}

          {step === 8 && (
            <div className="flex flex-col items-center justify-center">
            <Image src={utee} width={250} className="flex items-center justify-center" />
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                Countdown begins... ⏳
              </h1>
              <p className="text-lg md:text-2xl text-red-400 font-semibold">
                {countdown}
              </p>
            </div>
          )}

          {step < 8 && (
            <button
              onClick={nextStep}
              whileTap={{ scale: 0.9 }}
              className="mt-10 m-10 px-6 py-3 rounded-full bg-red-500 text-white text-lg font-semibold shadow-md hover:bg-red-600 transition absolute bottom-10 right-0 flex items-center gap-1"
            >
              <span>Next</span>
              <ArrowRight />
            </button>
          )}
        </motion.div>
      ) : (
        <motion.div
          variants={fadeInAnimation}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center justify-center h-screen bg-white"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-red-500 animate-pulse">
            Happy Valentine’s Day, Utee! ❤️🎉
          </h1>
          <Image src={buddies} width={250} />
        </motion.div>
      )}
    </div>
  );
};

export default ValentineApp;
