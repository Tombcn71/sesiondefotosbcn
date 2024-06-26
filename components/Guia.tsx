import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import React from "react";

function Guia() {
  return (
    <div className="flex justify-start ">
      <Dialog>
        <DialogTrigger>
          <Image
            src="/guia.png"
            width={180}
            height={180}
            alt="Picture of the author"
          />
        </DialogTrigger>
        <DialogContent className="overflow-y-scroll  max-h-screen">
          <Image
            src="/modal.png"
            width={800}
            height={500}
            alt="Picture of the author"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Guia;
