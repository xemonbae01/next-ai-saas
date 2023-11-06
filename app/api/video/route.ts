import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Replicate from "replicate";

import { incressApiLimit, checkApiLimit } from "@/lib/ApiLimit";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt } = body;

    if (!userId) {
      return new NextResponse("Unauthorize", { status: 401 });
    }

    if (!prompt) {
      return new NextResponse("Music prompt is required", { status: 400 });
    }

    //fetching userApiLimit from prismadb
    const freeTrial = await checkApiLimit();

    if (!freeTrial) {
      return new NextResponse("Free trial has been expired", { status: 403 });
    }

    //***this is a lengthly process without webhook**
    // const output = await replicate.run(
    //   "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
    //   {
    //     input: {
    //       prompt: "An astronaut riding a horse"
    //     }
    //   }
    // );
    //***this is a lengthly process without webhook**

    //generating music using web hook
    const response = await replicate.predictions.create({
      version:
        "9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
      input: {
        prompt: prompt,
      },
      webhook: process.env.REPLICATE_WEBHOOK_URL_VIDEO,
      webhook_events_filter: ["completed"],
    });

    //updating userApiLimit count to prismadb
    await incressApiLimit();

    return NextResponse.json(response);
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}
