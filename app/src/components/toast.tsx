"use client";

import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { useEffect } from "react";

export default function Toast() {
  const closeToast = () => {
    const toast = document.getElementById("toast")!;
    toast.style.transform = "translateY(150%)";
    toast.style.opacity = "0";
  };

  useEffect(() => {
    const toast = document.getElementById("toast")!;
    toast.style.transform = "translateY(0%)";
    toast.style.opacity = "1";
    setTimeout(() => {
      closeToast();
    }, 15000);
  });
  return (
    <Card
      id="toast"
      className="fixed bottom-4 right-4 z-40 flex max-w-[400px] translate-y-[150%] flex-row rounded-lg border-2 border-blue bg-primary-900 px-6 py-6 opacity-0 transition-all duration-200"
    >
      <X
        className="absolute right-2 top-2 cursor-pointer"
        onClick={() => closeToast()}
      />
      <CardContent className="flex flex-col p-0 pr-4">
        <CardTitle className="text-lg">FurGroove: AD Edition</CardTitle>
        <CardDescription>
          Did you mean to go to the After Dark Edition?
        </CardDescription>
      </CardContent>
      <a href="https://ad.furgroove.club" className="my-auto">
        <Button className="px-2">Take me there!</Button>
      </a>
    </Card>
  );
}
