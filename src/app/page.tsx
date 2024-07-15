"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import WordFadeIn from "@/components/magicui/word-fade-in";
import { OrbitingCirclesDemo } from "@/components/ui/OrbitingCircle";
import ShimmerButton from "@/components/magicui/shimmer-button";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <MaxWidthWrapper className="my-20 text-white">
      <div className="flex flex-row justify-between">
        <div className="max-w-[50%] my-20">
          <WordFadeIn className="text-white" words="Changing the way you learn" delay={0.4}/>
          <div >
            <Link href='/dashboard'>
              <ShimmerButton className="shadow-2xl bg-white mx-auto my-16 w-40">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Get started
                </span>
              </ShimmerButton>
            </Link>
          </div>
        </div>
        <div className="max-w-[50%]">
          <OrbitingCirclesDemo />
        </div>
      </div>
    </MaxWidthWrapper>
    </>
  );
}
