import EnterAnimation from "../animations/enter-animation";
import InfiniteCustomers from "../ui/infinite-customers";
import { TrustedBy } from "../ui/trusted-by";


export default function PortfolioCustomers() {
  return (
    <EnterAnimation>
      <div className="h-screen flex flex-col items-center justify-center bg-background">
        <div className="flex-1">
          <TrustedBy />
        </div>

        <div>
          <InfiniteCustomers />
        </div>
      </div>
    </EnterAnimation>
  );
}
