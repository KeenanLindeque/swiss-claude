import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Swiss Hospitality — One Prompt",
  description: "The original one-prompt design.",
};

export default function OnepromptLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
