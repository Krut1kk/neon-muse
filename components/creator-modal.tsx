"use client";

import { useEffect, useRef } from "react";
import { Send, X } from "lucide-react";
import { ChatPreview } from "@/components/chat-preview";
import { CreatorPhoto } from "@/components/creator-photo";
import { LatestDrops } from "@/components/latest-drops";
import { TagList } from "@/shared/ui/tag-list";
import { TelegramLink } from "@/shared/ui/telegram-link";
import { VerifiedName } from "@/shared/ui/verified-name";
import type { Creator } from "@/types/creator";

type CreatorModalProps = {
  creator: Creator;
  onClose: () => void;
};

export function CreatorModal({ creator, onClose }: CreatorModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  }, []);

  const close = () => dialogRef.current?.close();

  return (
    <dialog
      ref={dialogRef}
      aria-label={`${creator.name} profile`}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
      className="m-0 h-dvh max-h-none w-full max-w-none items-end justify-center bg-transparent text-white backdrop:bg-black/75 backdrop:backdrop-blur-md open:flex sm:items-center sm:p-5"
    >
      <div
        style={{ "--accent": creator.theme.accent }}
        className="relative flex max-h-[94dvh] w-full flex-col overflow-hidden rounded-t-[32px] border border-white/10 bg-surface shadow-[0_30px_100px_rgba(0,0,0,0.65)] animate-modal-in sm:max-w-4xl sm:rounded-[32px]"
      >
        <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-(--accent)/15 blur-[90px]" />

        <button
          type="button"
          aria-label="Close creator profile"
          onClick={close}
          className="absolute right-4 top-4 z-20 grid size-10 place-items-center rounded-full border border-white/15 bg-black/45 backdrop-blur-xl transition hover:bg-black/70 active:bg-black/80 motion-safe:active:scale-95"
        >
          <X size={18} />
        </button>

        <div className="relative grid overflow-y-auto overscroll-contain lg:grid-cols-[0.9fr_1.1fr]">
          <CreatorPhoto
            creator={creator}
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="min-h-[420px] sm:min-h-[520px] lg:min-h-full"
          >
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent p-6 pt-24">
              <VerifiedName name={creator.name} size="lg" />
              <p className="mt-1 text-sm text-white/60">
                {creator.handle} · {creator.followers} followers
              </p>
            </div>
          </CreatorPhoto>

          <div className="px-5 pt-5 sm:px-7 sm:pt-7 lg:p-8">
            <TagList tags={creator.tags} size="md" />

            <p className="mt-5 text-sm leading-6 text-white/65">{creator.bio}</p>

            <div className="mt-7">
              <LatestDrops drops={creator.latestDrops} />
            </div>

            <div className="mt-5">
              <ChatPreview key={creator.slug} creator={creator} />
            </div>

            <div className="sticky bottom-0 z-10 -mx-5 mt-5 border-t border-white/10 bg-surface/80 px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl sm:-mx-7 sm:px-7 lg:static lg:mx-0 lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
              <TelegramLink variant="block" label={`Continue chatting with ${creator.name} in Telegram`}>
                <Send size={16} /> Continue in Telegram
              </TelegramLink>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
