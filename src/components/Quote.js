import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import SkyBackground from "./SkyBackground";

export default function Quote() {
  return (
    <SkyBackground>
      <div className="banner quote">
        <div>
          <blockquote>
            <p><FaQuoteLeft/>The world is a book, and those who do not travel read only one page.<FaQuoteRight/></p>
            <small>- Saint Augustine</small>
          </blockquote>
        </div>
      </div>
    </SkyBackground>
  );
}
