"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Input } from "./input";

export function PlaceholdersAndVanishInput({
  placeholders,
  onChange,
}: {
  placeholders: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAnimation = () => {
    intervalRef.current = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
    }, 2000);
  };

  const handleVisibilityChange = () => {
    if (document.visibilityState !== "visible" && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    } else if (document.visibilityState === "visible") {
      startAnimation();
    }
  };

  useEffect(() => {
    startAnimation();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [placeholders]);

  return (
    <section
      className={cn(
        "relative mx-auto w-full transition duration-100",
        inputValue,
      )}
    >
      <Input
        onChange={(e) => {
          setInputValue(e.target.value);
          onChange && onChange(e);
        }}
        id="shuffle-input"
        value={inputValue}
        type="text"
      />

      <div className="pointer-events-none absolute inset-0 flex items-center">
        <AnimatePresence mode="wait">
          {!inputValue && (
            <motion.p
              initial={{
                y: 5,
                opacity: 0,
              }}
              key={`current-placeholder-${currentPlaceholder}`}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -15,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "linear",
              }}
              className="truncate pl-4 text-primary-300/75"
            >
              {placeholders[currentPlaceholder]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
