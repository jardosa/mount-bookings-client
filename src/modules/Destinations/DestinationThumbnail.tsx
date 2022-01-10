import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export function DestinationThumbnail({
  description,
  maxSlots,
  name,
  slotsLeft,
  imageUrl,
  _id,
}: {
  __typename?: "DestinationEntity" | undefined;
  _id: string;
  name: string;
  description: string;
  maxSlots: number;
  slotsLeft: number;
  imageUrl?: string | null | undefined;
}): JSX.Element {
  return (
    <Fragment key={_id}>
      <div className=" max-w-[400px] bg-gray-100 rounded-lg min-h-[360px] ">
        <Image
          className="rounded-t-lg"
          src={`${imageUrl ?? "/pulag.jpg"}`}
          width={440}
          height={240}
        />
        <div className="p-2">
          <Link href="/destinations/pulag">
            <a href="/destinations/pulag" className="text-2xl">
              {name}
            </a>
          </Link>
          <p className="italic font-serif">Kabayan, Benguet</p>
          {/* {description} */}
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ut.
          </div>
        </div>
      </div>
    </Fragment>
  );
}
