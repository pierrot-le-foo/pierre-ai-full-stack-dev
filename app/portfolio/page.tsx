"use client";

import PortfolioLayout from "@/components/portfolio/portfolio-layout";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function PortfolioPage() {
  const { otp } = useParams<{ otp: string }>();

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      fetch("https://hook.eu1.make.com/b2aft43axgu32gkr13gyk8zl34b2vbq8", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ service: otp }),
      });
    }
  }, [otp]);

  return <PortfolioLayout />;
}
