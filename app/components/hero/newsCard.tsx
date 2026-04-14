import Image from "next/image";

// components/NewsCard.tsx
interface NewsCardProps {
  category: string;
  date: string;
  title: string;
  image: string;
}

export default function NewsCard({ category, date, title, image }: NewsCardProps) {
  return (
    <div className="relative rounded-xl overflow-hidden w-auto max-w-67.5 max-h-58.25 relat">

      <Image width={270} height={100} src={image} alt={title} quality={75} className="w-full h-full object-cover" />

      {/* fade الصورة للأسفل */}
      <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent" />

      {/* النص */}
      <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-1">
        <span className="text-white/70 text-xs font-medium uppercase tracking-wide">
          {category} – {date}
        </span>
        <h3 className="text-white text-sm font-semibold leading-snug">
          {title}
        </h3>
      </div>

    </div>
  );
}