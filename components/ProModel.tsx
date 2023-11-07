"use client";

import axios from "axios";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useProModel } from "@/hooks/UseProModel";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Check,
  Code,
  ImageIcon,
  MessageSquareIcon,
  Music,
  VideoIcon,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const tools = [
  {
    lebel: "Conversation",
    icon: MessageSquareIcon,
    color: "text-violet-500",
    bgColor: "text-violet-500/10",
  },
  {
    lebel: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
  },
  {
    lebel: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
  },
  {
    lebel: "Music Generation",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    lebel: "Code Generation",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
  },
];

export const ProModel = () => {
  const proModel = useProModel();
  const [loading, setLoading] = useState(false);

  const onSubscribe = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/stripe");

      //window.location.href = (await response).data.url;
      window.location.href = response.data.url;
    } catch (error) {
      console.log("STRIPE_CLIENT_ERROR", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={proModel.isOpen} onOpenChange={proModel.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 font-bold py-1">
              Upgrade to S-Gen
              <Badge className="uppercase text-sm py-1" variant="premium">
                Pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
            {tools.map((tool) => (
              <Card
                key={tool.lebel}
                className="p-3 border-black/5 flex items-center justify-between"
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                    <tool.icon className={cn("w-6 h-6", tool.color)} />
                  </div>
                  <div className="font-semibold text-sm">{tool.lebel}</div>
                </div>
                <Check className="text-primary w-6 h-6" />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={onSubscribe}
            size="lg"
            variant="premium"
            className="w-full "
          >
            Upgrade <Zap className="w-5 h-5 ml-2 fill-white" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
