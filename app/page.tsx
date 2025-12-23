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
import { ChatReceipts } from "@/components/ChatReceipts";
import { MissionTimeline } from "@/components/MissionTimeline";
import { HotlineMoments } from "@/components/HotlineMoments";
import { Lessons } from "@/components/Lessons";

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-ink text-white">
      <Hero />
      <main className="space-y-12">
        <MomentsCarousel />
        <FriendshipIntro />
        <PhotoGallery />
        <ChatReceipts />
        <MissionTimeline />
        <HotlineMoments />
        <Lessons />
        <VibeStats />
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

