"use client";

import { BrandsGrid } from "./brands";


const brands = [
  {
    name: "SuperAnnotate",
    logo: "https://res.cloudinary.com/dpgrus185/image/upload/v1743067696/yh7pn4td79e7fg0eyurc.jpg",
  },
  {
    name: "Psychiatry UK",
    logo: "https://res.cloudinary.com/dpgrus185/image/upload/v1743067855/jldr28eprijepzibuu8p.jpg",
  },
  {
    name: "The Ally AI",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQEzg6EVKr-l6g/company-logo_200_200/company-logo_200_200/0/1719258033568?e=2147483647&v=beta&t=qhxjVdXOrU60yA9gbN4EoSC3gmz0OakXhAJ19QNkYIE",
  },
  {
    name: "zencastr",
    logo: "https://res.cloudinary.com/dpgrus185/image/upload/v1743789318/gwjgmaksitt9yoeehnd6.jpg",
  },
  {
    name: "jpme",
    logo: "https://res.cloudinary.com/dpgrus185/image/upload/v1743789436/zwu9i2ynjtn8il5oxro1.png",
  },
  {
    name: "sweetgreen",
    logo: "https://res.cloudinary.com/dpgrus185/image/upload/v1743789355/sfsijsgetnpg4gpzrsft.png",
  },
  {
    name: "fullstacklab",
    logo: "https://res.cloudinary.com/dpgrus185/image/upload/v1743789390/pwpptm5lcw83nh5qrina.png",
  },
  {
    name: "dms",
    logo: "https://res.cloudinary.com/dpgrus185/image/upload/v1743789952/ajtm3fqfskzuxjxof6ff.jpg",
  },
  {
    name: "cscale.io",
    logo: "https://res.cloudinary.com/dpgrus185/image/upload/v1743067763/me4xesowyhvkpxnpg1sc.jpg",
  },
];

export function TrustedBy() {
  return (
    <BrandsGrid
      brands={brands}
      className="min-w-[800px]"
      title="Trusted and loved by fast-growing companies worldwide"
      // Optionally, you can override the default values:
      // columns={{
      //   default: 2,
      //   md: 3,
      //   lg: 6
      // }}
      // maxWidth={{
      //   container: "max-w-screen-xl",
      //   grid: {
      //     default: "max-w-xs",
      //     md: "max-w-lg",
      //     lg: "max-w-3xl"
      //   }
      // }}
    />
  );
}