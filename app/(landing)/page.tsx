import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      <h1>This is the landing page</h1>
      <div>
        <Link href={"/sign-in"}>
          <Button>Sign In</Button>
        </Link>
        <Link href={"/sign-up"}>
          <Button>Sign Up</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
