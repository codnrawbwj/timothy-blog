import { CMS_NAME } from "@/lib/constants";
import Image from "next/image";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="flex items-center gap-2">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
          Timothy Lim
        </h1>
        <div className="rounded-[10px] overflow-hidden">
          <Image
            src="https://ccvucvagtkhiqhmomcar.supabase.co/storage/v1/object/public/public-assets//myProfile.jpg"
            alt="profile pic"
            width={55}
            height={55}
          />
        </div>
      </div>
    </section>
  );
}
