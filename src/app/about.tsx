import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <div className="container flex justify-center items-center gap-10 my-10 bg-[#eaeaea]">
        <div className="flex flex-col gap-10">
          <h1 className="font-semibold text-4xl">Nico Siahaan</h1>
          <div className="flex flex-col gap-5">
            <p>A Machine Learning Enthusiast</p>
            <p>
              About Me <Link href="/" className="text-xl">&rarr; </Link>
            </p>
          </div>
        </div>
        <Image src="/profile.jpg" alt="profile" width={200} height={100} />
      </div>
      <div className="flex justify-center items-center">
        <div className="text-3xl">&darr;</div>
      </div>
    </div>
  );
}
