import medianaLogoImg from "figma:asset/fe14d845a70d49cf97640561e544780e68f072ee.png";

export function MedianaLogo({ className = "" }: { className?: string }) {
  return (
    <img 
      src={medianaLogoImg} 
      alt="Mediana Voice" 
      className={`h-8 ${className}`}
    />
  );
}
