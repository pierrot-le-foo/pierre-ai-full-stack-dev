import { InfiniteSlider } from "../animations/infinite-slider";

function InfiniteCustomers() {
  return (
    <InfiniteSlider gap={24} reverse className="w-full h-full bg-white">
      <img
        src="http://res.cloudinary.com/dpgrus185/image/upload/v1743067696/yh7pn4td79e7fg0eyurc.jpg"
        alt="SuperAnnotate"
        className="h-[120px] w-auto"
      />
      <img
        src="http://res.cloudinary.com/dpgrus185/image/upload/v1743067763/me4xesowyhvkpxnpg1sc.jpg"
        alt="CScale.io"
        className="h-[120px] w-auto"
      />
      <img
        src="http://res.cloudinary.com/dpgrus185/image/upload/v1743789390/pwpptm5lcw83nh5qrina.png"
        alt="FullStackLab"
        className="h-[120px] w-auto"
      />
      <img
        src="http://res.cloudinary.com/dpgrus185/image/upload/v1743067855/jldr28eprijepzibuu8p.jpg"
        alt="Psychiatry UK"
        className="h-[120px] w-auto"
      />
      <img
        src="http://res.cloudinary.com/dpgrus185/image/upload/v1743789355/sfsijsgetnpg4gpzrsft.png"
        alt="Sweetgreen"
        className="h-[120px] w-auto"
      />
      <img
        src="http://res.cloudinary.com/dpgrus185/image/upload/v1743058458/scccbin7ewzzt6o6ebve.jpg"
        alt="Ally AI"
        className="h-[120px] w-auto"
      />
      <img
        src="http://res.cloudinary.com/dpgrus185/image/upload/v1743789318/gwjgmaksitt9yoeehnd6.jpg"
        alt="zencastr"
        className="h-[120px] w-auto"
      />

      <img
        src="http://res.cloudinary.com/dpgrus185/image/upload/v1743789436/zwu9i2ynjtn8il5oxro1.png"
        alt="jpme"
        className="h-[120px] w-auto"
      />

      <img
        src="http://res.cloudinary.com/dpgrus185/image/upload/v1743789952/ajtm3fqfskzuxjxof6ff.jpg"
        alt="DMS"
        className="h-[120px] w-auto"
      />
    </InfiniteSlider>
  );
}

export default InfiniteCustomers;
