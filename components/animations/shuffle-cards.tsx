import { useState } from "react";
import { TestimonialCard } from "../ui/testimonial-card";

const testimonials = [
  {
    id: 1,
    testimonial: "Pierre has brought great value to our team. He is a great communicator and has a strong work ethic. I highly recommend him for any project.",
    author: "Lesa W. - CTO @ Psychiatry-UK",
    image: 'https://media.licdn.com/dms/image/v2/C4E03AQF00j6JMJTNCA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1543740823925?e=1750896000&v=beta&t=mt-LI8y5FVkMJbo_6QkPTg2x7547HcC48BlDkmYPrf4'
  },
  {
    id: 2,
    testimonial: "Pierre helped us leverage our app from the ground up. His expertise has been invaluable in our growth. I can't recommend him enough.", 
    author: "Josh N. - CEO @ zencastr",
    image: 'https://media.licdn.com/dms/image/v2/C4E03AQHgn50TNCUFpA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517756679280?e=1750896000&v=beta&t=jeh5VF7-vQaEx9dsTwPFItX0CsfuzBW0aXiaPlR2IFk'
  },
  {
    id: 3,
    testimonial: "Excellent work and excellent communication. Pierre is a true professional and a pleasure to work with..",
    author: "Gohkan C. - CTO @ The Ally AI",
    image: 'https://media.licdn.com/dms/image/v2/C4D03AQEQxC6xx88Fog/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516556365562?e=1750896000&v=beta&t=Qp1jjghMbnh-bA2Dla9Ha8yBJRx18MIjFJnWFtE7jnA'
  }
];

function ShuffleCards() {
  const [positions, setPositions] = useState(["front", "middle", "back"]);

  const handleShuffle = () => {
    const newPositions = [...positions];
    newPositions.unshift(newPositions.pop());
    setPositions(newPositions);
  };

  return (
    <div className="grid place-content-center overflow-hidden bg-slate-900 px-8 py-24 text-slate-50 min-h-screen h-full w-full">
      <div className="relative -ml-[100px] h-[450px] w-[350px] md:-ml-[175px]">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            {...testimonial}
            handleShuffle={handleShuffle}
            position={positions[index]}
          />
        ))}
      </div>
    </div>
  );
}

export { ShuffleCards }