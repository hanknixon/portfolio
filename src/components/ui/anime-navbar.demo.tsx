"use client";

import * as React from "react";
import { User, Heart, Mail, Globe } from "lucide-react";
import { AnimeNavBar } from "@/components/ui/anime-navbar";

const items = [
  {
    name: "Professional",
    url: "#professional",
    icon: User,
  },
  {
    name: "Personal",
    url: "#personal",
    icon: Heart,
  },
  {
    name: "Contact",
    url: "#contact",
    icon: Mail,
  },
  {
    name: "English",
    url: "#language",
    icon: Globe,
  },
];

export function AnimeNavBarDemo() {
  return <AnimeNavBar items={items} defaultActive="Professional" />;
}
