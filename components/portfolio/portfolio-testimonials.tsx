import EnterAnimation from "../animations/enter-animation";
import { ShuffleCards } from "../animations/shuffle-cards";

export default function PortfolioTestimonials() {
  return (
    <EnterAnimation>
      <div className="h-screen flex flex-col items-center justify-center bg-background relative">
        <div className="absolute top-10 left-0 right-0 flex flex-col items-center justify-center gap-4">
          <h4 className=" text-5xl">Testimonials</h4>
          <p className="text-muted-foreground">Swipe left to browse</p>
        </div>
        <ShuffleCards />
      </div>
    </EnterAnimation>
  );
}
