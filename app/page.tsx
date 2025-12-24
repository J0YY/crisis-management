"use client";

import { useState } from "react";
import { WrappedController } from "@/components/WrappedController";
import { LoadingScreen } from "@/components/LoadingScreen";
import { EasterEggs } from "@/components/EasterEggs";
import { IntroSlide } from "@/components/slides/IntroSlide";
import { HeroSlide } from "@/components/slides/HeroSlide";
import { FriendshipIntroSlide } from "@/components/slides/FriendshipIntroSlide";
import { MomentsCarouselSlide } from "@/components/slides/MomentsCarouselSlide";
import { PhotoGallerySlide } from "@/components/slides/PhotoGallerySlide";
import { VibeStatsSlide } from "@/components/slides/VibeStatsSlide";
import { ChatReceiptsSlide } from "@/components/slides/ChatReceiptsSlide";
import { MissionTimelineSlide } from "@/components/slides/MissionTimelineSlide";
import { HotlineMomentsSlide } from "@/components/slides/HotlineMomentsSlide";
import { TimeEnergySlide } from "@/components/slides/TimeEnergySlide";
import { SuperlativesSlide } from "@/components/slides/SuperlativesSlide";
import { MatchmakingNodSlide } from "@/components/slides/MatchmakingNodSlide";
import { LessonsSlide } from "@/components/slides/LessonsSlide";
import { LoveLetterSlide } from "@/components/slides/LoveLetterSlide";
import { FinaleSlide } from "@/components/slides/FinaleSlide";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  const slides = [
    <IntroSlide key="intro" />,
    <HeroSlide key="hero" />,
    <FriendshipIntroSlide key="friendship-intro" />,
    <MomentsCarouselSlide key="moments" />,
    <PhotoGallerySlide key="photos" />,
    <VibeStatsSlide key="vibes" />,
    <ChatReceiptsSlide key="chats" />,
    <MissionTimelineSlide key="missions" />,
    <HotlineMomentsSlide key="hotline" />,
    <TimeEnergySlide key="time-energy" />,
    <SuperlativesSlide key="superlatives" />,
    <MatchmakingNodSlide key="matchmaking" />,
    <LessonsSlide key="lessons" />,
    <LoveLetterSlide key="love" />,
    <FinaleSlide key="finale" />
  ];

  return (
    <div className="relative bg-ink text-white">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      {!isLoading && (
        <>
          <WrappedController slides={slides} />
          <EasterEggs />
        </>
      )}
    </div>
  );
}

