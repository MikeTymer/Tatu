import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  label?: string;
  className?: string;
  variant?: "hero" | "outline" | "default" | "secondary" | "ghost" | "link" | "outlineGold";
  size?: "default" | "sm" | "lg" | "xl" | "icon";
}

export const WhatsAppButton = ({
  phoneNumber = "+256784311839",
  message = "Hello Tatu Enterprises! I'm interested in your services.",
  label = "WhatsApp Us",
  className = "",
  variant = "hero",
  size = "lg",
}: WhatsAppButtonProps) => {
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    message
  )}`;

  const isIcon = size === "icon";

  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={`group relative overflow-hidden bg-[#25D366] hover:bg-[#20bd5c] text-white border-none shadow-lg transition-transform hover:scale-105 active:scale-95 ${className}`}
    >
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
        <MessageCircle className={`h-5 w-5 fill-current ${isIcon ? "" : "mr-0.5"}`} />
        {!isIcon && <span>{label}</span>}
      </a>
    </Button>
  );
};
