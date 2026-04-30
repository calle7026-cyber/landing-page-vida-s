import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Índice Glucémico y Diabetes – Cambia tu vida hoy",
  description: "Descubre cómo el índice glucémico puede transformar tu salud y prevenir la diabetes. Guía completa con estrategias probadas y bonos especiales.",
  keywords: "índice glucémico, diabetes, nutrición, salud, dieta, glucosa",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
