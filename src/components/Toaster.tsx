import { Toaster as Sonner } from 'sonner@2.0.3';

export function Toaster() {
  return (
    <Sonner
      position="top-right"
      expand={false}
      richColors
      closeButton
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
    />
  );
}
