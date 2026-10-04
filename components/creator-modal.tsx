"use client";

import { useEffect, useRef, useState, type AnimationEvent } from "react";
import { Send, X } from "lucide-react";
import { CreatorPhoto } from "@/components/creator-photo";
import { CreatorTabs } from "@/components/creator-tabs";
import { cn } from "@/shared/lib/cn";
import { TelegramLink } from "@/shared/ui/telegram-link";
import type { Creator } from "@/types/creator";

const PHOTO_SIZES = "(max-width: 1023px) 100vw, 450px";

type CreatorModalProps = {
  creator: Creator;
  onClose: () => void;
};

export function CreatorModal({ creator, onClose }: CreatorModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  }, []);

  const requestClose = () => setIsClosing(true);

  const finishClose = (event: AnimationEvent<HTMLDivElement>) => {
    const dialog = dialogRef.current;
    if (isClosing && event.target === event.currentTarget && dialog?.open) {
      dialog.close();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      aria-label={`${creator.name} profile`}
      onClose={onClose}
      onCancel={(event) => {
        event.preventDefault();
        requestClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) requestClose();
      }}
      className={cn(
        "m-0 h-dvh max-h-none w-full max-w-none items-end overflow-clip justify-center bg-transparent text-white backdrop:bg-black/75 backdrop:backdrop-blur-sm open:flex md:items-center md:p-5",
        isClosing ? "backdrop:animate-backdrop-out" : "backdrop:animate-backdrop-in",
      )}
    >
      <div
        style={{ "--accent": creator.theme.accent }}
        onAnimationEnd={finishClose}
        className={cn(
          "relative flex max-h-[92dvh] w-full flex-col overflow-hidden rounded-t-[28px] border-t border-white/10 bg-surface shadow-[0_30px_100px_rgba(0,0,0,0.65)] md:max-h-[min(880px,92dvh)] md:max-w-[1040px] md:rounded-[32px] md:border lg:max-h-[min(780px,88dvh)] lg:min-h-[min(720px,88dvh)]",
          isClosing ? "pointer-events-none animate-sheet-out md:animate-modal-out" : "motion-safe:animate-sheet-in md:motion-safe:animate-modal-in",
        )}
      >
        <div aria-hidden="true" className="mx-auto mb-2 mt-2.5 h-1 w-9 shrink-0 rounded-full bg-white/25 md:hidden" />

        <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-(--accent)/15 blur-[90px]" />

        <button
          type="button"
          aria-label="Close creator profile"
          onClick={requestClose}
          className="absolute right-4 top-4 z-20 grid size-10 place-items-center rounded-full border border-white/15 bg-black/45 backdrop-blur-xl transition duration-200 hover:bg-black/70 active:bg-black/80 motion-safe:active:scale-95"
        >
          <X size={18} />
        </button>

        <div className="relative flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain lg:grid lg:grid-cols-[43fr_57fr] lg:grid-rows-1 lg:overflow-hidden">
          <CreatorPhoto
            creator={creator}
            sizes={PHOTO_SIZES}
            eager
            className="h-[40dvh] min-h-[240px] shrink-0 lg:h-full lg:min-h-0"
            imageClassName="object-[center_25%] lg:object-center"
          />

          <div className="flex flex-1 flex-col lg:min-h-0 lg:overflow-y-auto lg:overscroll-contain">
            <CreatorTabs creator={creator} />

            <div className="sticky bottom-0 z-10 mt-auto border-t border-white/10 bg-surface/80 px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl sm:px-7">
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
