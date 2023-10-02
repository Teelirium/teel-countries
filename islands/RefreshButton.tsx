import { RefreshIcon } from "@/components/Icons/index.tsx";
import { JSX } from "preact";

type Props = JSX.HTMLAttributes<HTMLButtonElement>;

export function RefreshButton(props: Props) {
  return (
    <button
      onClick={() => window.location.reload()}
      class="h-full text-inherit hover:animate-spin active:translate-y-0.5 transition-transform"
      {...props}
    >
      <RefreshIcon />
    </button>
  );
}
