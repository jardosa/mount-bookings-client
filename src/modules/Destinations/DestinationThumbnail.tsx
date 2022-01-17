import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { DestinationEntity, Province } from "../../generated/graphql";

export function DestinationThumbnail({
  description,
  maxSlots,
  name,
  slotsLeft,
  imageUrl,
  _id,
  slug,
  province,
}: {
  __typename?: "DestinationEntity" | undefined;
  _id: string;
  name: string;
  description: string;
  maxSlots: number;
  slotsLeft: number;
  imageUrl?: string | null | undefined;
  slug: string;
  province: {
    __typename?: "Province" | undefined;
    _id: string;
    provDesc: string;
    provCode: string;
    psgcCode: string;
    region: { __typename?: "Region" | undefined; regDesc: string };
  };
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
          <Link href={`/destinations/${slug}`}>
            <a href={`/destinations/${slug}`} className="text-2xl">
              {name}
            </a>
          </Link>
          <p className="italic font-serif">{`${province.provDesc}, ${province.region.regDesc}`}</p>
          {/* {description} */}
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ut.
          </div>
        </div>
      </div>
    </Fragment>
  );
}
