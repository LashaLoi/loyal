import { BackgroundBeamsWithCollision } from "@/lib/ui/background-beams-with-collision";
import { Cover } from "@/lib/ui/cover";

export default function Home() {
  return (
    <BackgroundBeamsWithCollision>
      <h2 className="text-4xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        <div className="mb-5">Loyal Generation</div>
        <Cover className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Soming soon!</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">Soming soon!</span>
          </div>
        </Cover>
      </h2>
    </BackgroundBeamsWithCollision>
  );
}
