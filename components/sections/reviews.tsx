import { reviews } from "@/data/reviews";
import Star from "@/images/icons/star.png";
import Image from "next/image";

export default function Reviews() {
  return (
    <section className="grid grid-cols-3 gap-8">
      {reviews.map((review, index) => (
        <div key={index} className="bg-[var(--background-other)] h-[300px] items-center rounded-md p-6 gap-2 flex flex-col">
          <div className="flex items-center">
            {/* Uncomment this if you have profile photos */}
            <Image src={review.photo} width={30} height={30} alt="profile-photo" className="rounded-full mr-2" />
            <p>{review.name}</p>
          </div>
          <div className="flex mb-2">
            {Array.from({ length: review.starCount }).map((_, index) => (
              <Image key={index} src={Star} className="object-contain" width={25} height={25} alt="star" />
            ))}
          </div>
          <textarea className="mb-2 w-full h-full text-center bg-[var(--background-other)]">{review.description}</textarea>
        </div>
      ))}
    </section>
  );
}
