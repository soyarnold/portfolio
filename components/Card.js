import Image from "next/image";

import CodeButton from "./CodeButton";
import DemoButton from "./DemoButton";

export default function Card({
  src,
  alt,
  title,
  description,
  stack,
  code,
  demo,
}) {
  return (
    <div className="items-center rounded-lg overflow-hidden shadow-white-shadow">
      <Image src={src} alt={alt} height={250} width={400} layout="responsive" />
      <div className="py-8">
        <div className="text-center space-y-3 px-4">
          <h1 className="text-3xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
            {title}
          </h1>
          <p>{description}</p>
          <p>{stack}</p>
        </div>
        <div className="flex justify-evenly mt-8">
          <CodeButton title="Code" code={code} />
          <DemoButton title="Demo" demo={demo} />
        </div>
      </div>
    </div>
  );
}
