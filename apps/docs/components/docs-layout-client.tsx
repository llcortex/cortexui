"use client";

import { useState } from "react";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { TableOfContents } from "./toc";
import { DocsCortexSurface } from "./docs-cortex-surface";

export function DocsLayoutClient({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header onMenuClick={() => setSidebarOpen(true)} />
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1 min-w-0 lg:pl-[272px] xl:pr-[224px]">
          <article className="min-h-screen max-w-3xl mx-auto px-6 py-10">
            <DocsCortexSurface />
            {children}
          </article>
        </main>
        <TableOfContents />
      </div>
    </div>
  );
}
