import React from "react";

interface YouTubeProps {
  id: string;
  title?: string;
}

export function YouTube({ id, title = "YouTube video player" }: YouTubeProps) {
  if (!id) return null;

  return (
    <div className="my-6 aspect-video w-full max-w-[800px] overflow-hidden rounded-xl border border-slate-200 bg-slate-900 shadow-md">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        className="h-full w-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
