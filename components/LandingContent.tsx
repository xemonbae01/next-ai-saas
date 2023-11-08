"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Antonio",
    avatar: "A",
    title: "Software Engineer",
    description: "This application helps me a lot to speed up my work!",
  },
  {
    name: "Antonio",
    avatar: "A",
    title: "Software Engineer",
    description: "This application helps me a lot to speed up my work!",
  },
  {
    name: "Antonio",
    avatar: "A",
    title: "Software Engineer",
    description: "This application helps me a lot to speed up my work!",
  },
  {
    name: "Antonio",
    avatar: "A",
    title: "Software Engineer",
    description: "This application helps me a lot to speed up my work!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h1 className=" text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div className="w-full text-center">
                  <div className="w-full flex items-center justify-center mb-2">
                    <p className="text-lg rounded-full w-10 h-10 bg-[#111827] flex items-center justify-center">
                      {item.avatar}
                    </p>
                  </div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0 text-xs">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
