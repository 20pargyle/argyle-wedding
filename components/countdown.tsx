"use client";

export default function Countdown() {
  const today = new Date().getTime();
  const wedding = new Date("2025-08-06T13:00:00").getTime();
  const countdown = Math.round((wedding - today) / (24 * 60 * 60 * 1000));
  return <h3>{countdown} DAYS TO GO</h3>;
}
