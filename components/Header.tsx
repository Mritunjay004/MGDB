import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import SearchInput from "./SearchInput";

type Props = {
  setQuery?: Dispatch<SetStateAction<string>>;
};

const Header = ({ setQuery }: Props) => {
  // top-0 flex
  return (
    <div className="sticky top-0  z-40 bg-zinc-900 h-24 w-full ">
      {/* middle header */}
      <div className="w-full flex justify-between h-full max-w-7xl px-4 m-auto">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <div className="invisible mt-7 md:visible">
              <Image
                width={150}
                height={50}
                src="/rmdb-logo.svg"
                alt="rmdb-logo"
              />
            </div>

            <div className="absolute  md:invisible pt-2">
              <Image
                width={42}
                height={42}
                src="/rmdb-logo-small.svg"
                alt="rmdb-logo-small"
              />
            </div>
          </div>
        </Link>

        {/* search input */}
        {setQuery ? (
          <div className="relative flex items-center">
            <SearchInput setQuery={setQuery} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
