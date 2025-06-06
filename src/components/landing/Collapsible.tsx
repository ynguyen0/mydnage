import { useState } from "react";
import type { ReactNode } from "react";


interface CollapsibleProps {
  title: string;
  children: ReactNode;
}

export default function Collapsible({ title, children }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-md p-2 mb-2">
      <button
        className="w-full text-left font-semibold flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span>{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && <div className="mt-2">{children}</div>}
    </div>
  );
}
