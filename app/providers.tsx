"use client";

import { Layout } from "@/components/layout/layout";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <Layout>{children}</Layout>
    </NextUIProvider>
  );
}
