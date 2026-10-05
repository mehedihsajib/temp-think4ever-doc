import React from "react";

interface YouTubeProps {
  id: string;
  title?: string;
}

export function YouTube({ id, title = "YouTube video player" }: YouTubeProps) {
  // Videos hidden for now as requested
  return null;
}
