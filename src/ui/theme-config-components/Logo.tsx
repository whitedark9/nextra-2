import Image from "next/image";
import APP from "~/constants/app.config";

export default function Logo({ size = 50, alwaysDetail = false }) {
  return (
    <div className="text-emphasis flex flex-row items-center justify-start gap-2 font-bold">
      {/** Light Logo */}
      <Image
        width={size}
        height={size}
        src={"/favicon.png"}
        alt={"Logo"}
        className="dark:hidden"
      />
      {/** Dark Logo */}
      <Image
        width={size}
        height={size}
        src={"/favicon-dark.png"}
        alt={"Logo"}
        className="hidden dark:block"
      />
      {alwaysDetail ? (
        <span className="text-xl">{APP.name}</span>
      ) : (
        <>
          <span className="hidden text-2xl md:block">{APP.name}</span>
          <span className="text-2xl md:hidden">{APP.shortName}</span>
        </>
      )}
    </div>
  );
}
