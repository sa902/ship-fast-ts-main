
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

const features = [
  {
    title: "Calendar Integration",
    description:
      "Connect Dryv to your existing calendar (Google Calendar, Outlook, etc.) for seamless scheduling and time management.",
    styles: "bg-primary text-primary-content",
    demo: (
      <div className="overflow-hidden h-full flex items-stretch">
        <Image
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          alt="Calendar Integration"
          className="rounded-t-box h-full object-cover animate-appearFromRight"
          width={500}
          height={500}
        />
      </div>
    ),
  },
  {
    title: "AI-Powered Task Suggestions",
    description:
      "Dryv analyzes your schedule and suggests optimal times for tasks, maximizing your productivity and minimizing wasted time.",
    styles: "md:col-span-2 bg-base-300 text-base-content",
    demo: (
      <div className="px-6 max-w-[600px] flex flex-col gap-4 overflow-hidden">
        {[
          {
            text: "Prepare presentation for client meeting",
            secondaryText: "Suggested time: Tomorrow, 10:00 AM - 11:30 AM",
            transition: "group-hover:-mt-14 duration-500",
          },
          {
            text: "Write blog post on time management",
            secondaryText: "Suggested time: Friday, 2:00 PM - 4:00 PM",
          },
          {
            text: "Review project proposal",
            secondaryText: "Suggested time: Today, 3:00 PM - 3:30 PM",
          },
        ].map((feature, i) => (
          <div
            className={`p-4 bg-base-100 text-base-content rounded-box flex flex-col gap-2 mb-2 ${feature?.transition} animate-appearFromRight`}
            key={i}
          >
            <p className="font-semibold mb-1">{feature.text}</p>
            <p className="text-base-content-secondary">
              {feature.secondaryText}
            </p>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Personalized Reports",
    description:
      "Get detailed reports on your time usage, productivity, and progress towards your goals, empowering you to make data-driven decisions.",
    styles: "md:col-span-2 bg-base-100 text-base-content",
    demo: (
      <div className="flex left-0 w-full h-full pt-0 lg:pt-8 overflow-hidden -mt-4">
        <div className="-rotate-[8deg] flex min-w-max overflow-x-visible h-full lg:pt-4">
          {[
            {
              css: "-ml-1 rotate-[6deg] w-72 h-72 z-30 bg-base-200 text-base-content rounded-2xl group-hover:-ml-64 group-hover:opacity-0 group-hover:scale-75 transition-all duration-500 p-4",
              chart: (
                <Image
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="Productivity Chart"
                  className="w-full h-full object-cover animate-appearFromRight"
                  width={500}
                  height={500}
                />
              ),
            },
          ].map((theme, i) => (
            <div className={theme.css} key={i}>
              {theme.chart}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Focus Mode",
    description:
      "Eliminate distractions and boost your concentration with Dryv's Focus Mode, blocking distracting websites and notifications.",
    styles: "bg-neutral text-neutral-content",
    demo: (
      <div className="text-neutral-content px-6 space-y-4">
        <Image
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          alt="Focus Mode"
          className="w-full h-full object-cover rounded-box animate-appearFromRight"
          width={500}
          height={500}
        />
      </div>
    ),
  },
];
const FeaturesGrid = () => {
  return (
    <section className="flex justify-center items-center w-full bg-base-200/50 text-base-content py-20 lg:py-32 animate-opacity">
      <div className="flex flex-col max-w-[82rem] gap-16 md:gap-20 px-4">
        <h2 className="max-w-3xl font-black text-4xl md:text-6xl tracking-[-0.01em]">
          Work Smarter, <br /> Not Harder
        </h2>
        <div className="flex flex-col w-full h-fit gap-4 lg:gap-10 text-text-default max-w-[82rem]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`${feature.styles} rounded-3xl flex flex-col gap-6 w-full h-[22rem] lg:h-[25rem] pt-6 overflow-hidden group`}
              >
                <div className="px-6 space-y-2">
                  <h3 className="font-bold text-xl lg:text-3xl tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="opacity-80">{feature.description}</p>
                </div>
                {feature.demo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
