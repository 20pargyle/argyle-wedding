"use client";

export default function Countdown() {
  const today = new Date().getTime();
  const wedding = new Date("2023-12-19T11:00:00").getTime();
  const countdown = Math.round((wedding - today) / (24 * 60 * 60 * 1000));
  return <h3>{countdown} DAYS TO GO</h3>;
}
