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
    // const response = await replicate.run(
    //   "riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05",
    //   {
    //     input: {
    //       alpha: 0.5,
    //       prompt_a: prompt,
    //       denoising: 0.75,
    //       num_inference_steps: 50,
    //     },
    //   }
    // );
    //***this is a lengthly process without webhook**

    //generating music using web hook
    const response = await replicate.run(
      "riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05",
      {
        input: {
          alpha: 0.5,
          prompt_a: prompt,
          denoising: 0.75,
          num_inference_steps: 50,
          // Add the webhook URL here
          webhook: process.env.REPLICATE_WEBHOOK_URL_MUSIC,
        },
      }
    );

    //updating userApiLimit count to prismadb
    await incressApiLimit();

    return NextResponse.json(response);
  } catch (error) {
    console.log("[MUSIC_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
