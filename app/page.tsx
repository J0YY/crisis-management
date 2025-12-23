"use client";

import { Hero } from "@/components/Hero";
import { FriendshipIntro } from "@/components/FriendshipIntro";
import { PhotoGallery } from "@/components/PhotoGallery";
import { VibeStats } from "@/components/VibeStats";
import { MomentsCarousel } from "@/components/MomentsCarousel";
import { Superlatives } from "@/components/Superlatives";
import { TimeEnergy } from "@/components/TimeEnergy";
import { MatchmakingNod } from "@/components/MatchmakingNod";
import { LoveLetter } from "@/components/LoveLetter";
import { BirthdayFinale } from "@/components/BirthdayFinale";
import { EasterEggs } from "@/components/EasterEggs";

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-ink text-white">
      <Hero />
      <main className="space-y-12">
        <FriendshipIntro />
        <PhotoGallery />
        <VibeStats />
        <MomentsCarousel />
        <Superlatives />
        <TimeEnergy />
        <MatchmakingNod />
        <LoveLetter />
        <BirthdayFinale />
      </main>
      <EasterEggs />
    </div>
  );
}

