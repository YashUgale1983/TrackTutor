import OrbitingCircles from "@/components/magicui/orbiting-circles";
import Image from "next/image";

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[470px] w-[470px] flex-col items-center justify-center overflow-hidden rounded-lg border-none bg-gray-950 md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Domains
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <Icons.biology />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Icons.coding />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={140}
        duration={20}
        reverse
      >
        <Icons.chemistry />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={200}
        duration={20}
        delay={20}
        reverse
      >
        <Icons.geography />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  coding: () => (
    <Image width="48" height="48" src="https://img.icons8.com/sci-fi/48/laptop-coding.png" alt="laptop-coding"/>
  ),
  geography: () => (
    <Image width="48" height="48" src="https://img.icons8.com/external-topaz-kerismaker/48/external-Astrophysics-metaverse-topaz-kerismaker.png" alt="external-Astrophysics-metaverse-topaz-kerismaker"/>
  ),
  openai: () => (
    <Image width="48" height="48" src="https://img.icons8.com/fluency/48/formula-fx.png" alt="formula-fx"/>
  ),
  chemistry: () => (
    <Image width="48" height="48" src="https://img.icons8.com/fluency/48/test-tube.png" alt="test-tube"/>
  ),
  biology: () => (
    <Image width="48" height="48" src="https://img.icons8.com/fluency/48/biotech.png" alt="biotech"/>
  ),
};
