import type { ReactNode } from "react";

interface PostItNoteProps {
  children: ReactNode;
  imgLoading?: "eager" | "lazy";
}

export default function PostItNote({ children, imgLoading }: PostItNoteProps) {
  return (
    <div className="post-it-note">
      <div className="post-it-note-surface" data-loading={imgLoading ?? "eager"} aria-hidden="true">
        <span className="post-it-note-pin"></span>
      </div>
      <div className="post-it-note-content">{children}</div>
    </div>
  );
}
