"use client";

import Image from "next/image";
import { ArrowDown, Sparkles } from "lucide-react";
import { CreatorPhoto } from "@/components/creator-photo";
import { creators } from "@/data/creators";
import { setCreatorParam } from "@/shared/lib/creator-url";
import { Container } from "@/shared/ui/container";
import { Pill } from "@/shared/ui/pill";

const COLLAGE_POSITIONS = [
  "left-[2%] top-[14%] -rotate-6",
  "right-[2%] top-[2%] rotate-6",
  "left-[26%] bottom-[2%] rotate-1",
];

const collageCreators = creators.slice(0, COLLAGE_POSITIONS.length);

export function Hero() {
  return (
    <Container as="section" className="relative pb-12 pt-8 sm:pb-16 sm:pt-16">
      <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/20 blur-[110px]" />

      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="text-center lg:text-left">
          <Pill className="mb-5 backdrop-blur">
            <Sparkles size={14} className="text-violet-300" /> AI personalities, reimagined
          </Pill>

          <h1 className="text-5xl font-semibold leading-[0.93] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Creators that feel
            <span className="mt-1 block pb-[0.12em] bg-gradient-to-r from-violet-300 via-pink-300 to-orange-200 bg-clip-text text-transparent">
              surprisingly real.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-white/55 sm:text-base lg:mx-0">
            Discover {creators.length} distinct virtual creators, explore their worlds and preview a conversation before taking it to
            Telegram.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#creators"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition duration-200 hover:bg-white/90 hover:shadow-[0_10px_30px_rgba(255,255,255,0.12)] active:bg-white/85 motion-safe:active:scale-[0.98]"
            >
              Meet the creators
              <ArrowDown size={16} className="transition-transform duration-200 motion-safe:group-hover:translate-y-1" />
            </a>

            <div className="flex items-center gap-3 text-left">
              <div className="flex -space-x-2">
                {creators.map((creator) => (
                  <div
                    key={creator.id}
                    className="relative size-8 overflow-hidden rounded-full border-2 border-background bg-surface-muted"
                  >
                    <Image src={creator.image} alt="" fill sizes="32px" className="object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-xs font-medium text-white/75">{creators.length} creators live</p>
                <p className="text-[10px] text-white/35">Distinct worlds. One tap away.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto h-[430px] w-full max-w-[500px] sm:h-[520px]">
          <div className="absolute inset-x-10 top-10 h-72 rounded-full bg-gradient-to-br from-violet-500/25 via-pink-500/10 to-cyan-500/15 blur-3xl" />

          {collageCreators.map((creator, index) => (
            <button
              key={creator.id}
              type="button"
              aria-label={`Open ${creator.name} profile`}
              onClick={() => setCreatorParam(creator.slug)}
              style={{ "--accent": creator.theme.accent }}
              className={`absolute ${COLLAGE_POSITIONS[index]} aspect-[4/5] w-[44%] overflow-hidden rounded-[28px] border border-white/15 bg-white/5 p-1.5 text-left shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur transition duration-300 hover:z-10 hover:border-(--accent)/50 hover:shadow-[0_24px_70px_color-mix(in_oklab,var(--accent)_30%,transparent)] focus-visible:z-10 motion-safe:hover:scale-[1.03] motion-safe:active:scale-[0.98]`}
            >
              <CreatorPhoto
                creator={creator}
                preload={index === 0}
                accent={false}
                sizes="220px"
                className="h-full rounded-[22px]"
              >
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-12">
                  <p className="text-sm font-semibold">{creator.name}</p>
                  <p className="text-[10px] text-white/55">{creator.category}</p>
                </div>
              </CreatorPhoto>
            </button>
          ))}
        </div>
      </div>
    </Container>
  );
}
