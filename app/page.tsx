import Image from "next/image";
import { CATEGORIES, GEAR_ITEMS } from "@/lib/gear";
import AffiliateLink from "@/components/AffiliateLink";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-white border-b border-black py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-archivo text-5xl md:text-8xl tracking-tight uppercase mb-6 leading-[0.9]">
            My Favorite<br />Pickleball Gear.
          </h1>
          <p className="text-xl md:text-2xl font-medium text-zinc-500 uppercase tracking-tight">
            Nathan's pickleball stuff leaderboard.
          </p>
        </div>
      </section>

      {/* Sticky Category Bar */}
      <div className="sticky top-20 z-40 w-full overflow-x-auto bg-black py-4 border-b border-black">
        <div className="container mx-auto flex items-center gap-6 px-4 whitespace-nowrap scrollbar-hide font-bold text-xs uppercase tracking-widest text-zinc-400">
          {CATEGORIES.map((cat) => (
            <a
              key={cat}
              href={`#${cat.toLowerCase().replace(/ /g, "-")}`}
              className="hover:text-brand transition-colors text-white"
            >
              {cat}
            </a>
          ))}
        </div>
      </div>

      {/* The Grid */}
      <div className="bg-white">
        {CATEGORIES.map((cat) => {
          const items = GEAR_ITEMS.filter(item => item.category === cat);
          // Still hide empty sections in the grid itself for layout cleanliness
          if (items.length === 0) return null;

          return (
            <section
              key={cat}
              id={cat.toLowerCase().replace(/ /g, "-")}
              className="section-anchor py-16 border-b border-black last:border-0"
            >
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                  <h2 className="font-archivo text-4xl uppercase tracking-tight flex items-center gap-4 mb-0">
                    {cat}
                  </h2>
                  {cat === "Paddles" && (
                    <p className="font-bold text-xs uppercase tracking-widest text-zinc-400 max-w-xs md:text-right">
                      Ranked in order of my current preference. #1 is the daily driver.
                    </p>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {items.map((item, index) => (
                    <div key={item.id} className="group flex flex-col border-2 border-black bg-white transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                      <AffiliateLink href={item.link} className="relative aspect-square border-b-2 border-black overflow-hidden bg-zinc-100">
                        <div className="absolute top-0 left-0 z-10 bg-brand px-3 py-1 font-archivo text-[10px] tracking-widest text-black border-r-2 border-b-2 border-black uppercase">
                          #{index + 1}{index === 0 && cat === "Paddles" ? ": THE BEST RIGHT NOW" : ""}
                        </div>
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                        />
                      </AffiliateLink>
                      <div className="p-6 flex flex-1 flex-col">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex flex-col">
                            <h3 className="font-archivo text-xl uppercase leading-none mb-1">{item.name}</h3>
                            {item.discountCode && (
                              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                                {item.discountCode.includes("LINK") ? "" : "USE CODE: "}<span className="text-black bg-zinc-100 px-1 border border-zinc-200">{item.discountCode}</span>
                              </span>
                            )}
                          </div>
                          <div className="flex flex-col items-end">
                            {item.originalPrice && (
                              <span className="text-xs font-bold text-zinc-400 line-through mb-1">
                                {item.originalPrice}
                              </span>
                            )}
                            <span className="font-archivo text-base bg-black text-white px-2 py-1 border-2 border-black shadow-[2px_2px_0px_rgba(197,233,11,1)]">
                              {item.price}
                            </span>
                          </div>
                        </div>
                        <p className="text-zinc-600 text-sm mb-8 flex-1">
                          {item.description}
                        </p>
                        <AffiliateLink
                          href={item.link}
                          className="w-full text-center bg-black text-white py-4 font-archivo text-xs uppercase tracking-widest hover:bg-brand hover:text-black transition-all"
                        >
                          View Product
                        </AffiliateLink>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
