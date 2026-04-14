import Image from "next/image";

interface Category {
  id: number;
  title: string;
  image: string;
}

const CATEGORIES: Category[] = [
  { id: 1, title: "FOOTBALL", image: "/football.png" },
  { id: 2, title: "BASKETBALL", image: "/basketball2.png" },
  { id: 3, title: "CAR SPORT", image: "/carsport.png" },
  { id: 4, title: "TABLE TENNIS", image: "/tabletennis.jpg" },
];

// مكون الصورة: بسيط ومستقل
const CategoryImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative w-full h-64 overflow-hidden rounded-lg">
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 50vw, 25vw"
      className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75"
    />
  </div>
);

// مكون العنوان
const CategoryTitle = ({ title }: { title: string }) => (
  <div className="bg-[#EBEEF3] flex items-center justify-center py-8 px-4 rounded-lg flex-1">
    <span className="text-xl font-extrabold tracking-widest text-gray-700 uppercase text-center">
      {title}
    </span>
  </div>
);

export default function CategoryCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {CATEGORIES.map((cat) => (
        <div
          key={cat.id}
          className={`flex flex-col gap-3 cursor-pointer group ${
            cat.id % 2 !== 0 ? "flex-col" : "flex-col-reverse"
          }`}
        >
          <CategoryTitle title={cat.title} />
          <CategoryImage src={cat.image} alt={cat.title} />
        </div>
      ))}
    </div>
  );
}