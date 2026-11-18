import { NosotrosPage } from "@/pages/NosotrosPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/nosotros")({
  component: NosotrosPage,
});