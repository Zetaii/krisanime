import Image from "next/image"

import { MotionDiv } from "./Motion"

const stagger = 0.25

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export interface AnimeProp {
  id: string
  name: string
  image: {
    original: string
  }
  kind: string
  episodes: number
  episodes_aired: number
  score: string
}

interface Prop {
  anime: AnimeProp
  index: number
}

function AnimeCard({ anime, index }: Prop) {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * stagger,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
      className="max-w-sm rounded relative w-full"
    >
      <div className="relative w-full h-[37vh]">
        <Image
          src={`https://shikimori.one${anime.image.original}`}
          alt={anime.name}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"
          className="rounded-xl hover:scale-110 transition-all"
          priority
        />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {anime.name}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {anime.kind}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./episodes.svg"
              alt="episodes"
              width={20}
              sizes="100vw"
              height={20}
              className="object-contain hover:scale-110 transition-all"
            />
            <p className="text-base text-white font-bold">
              {anime.episodes || anime.episodes_aired}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./star.svg"
              alt="star"
              width={18}
              height={18}
              sizes="100vw"
              className="object-contain"
            />
            <p className="text-base font-bold text-white">{anime.score}</p>
          </div>
        </div>
      </div>
    </MotionDiv>
  )
}

export default AnimeCard
