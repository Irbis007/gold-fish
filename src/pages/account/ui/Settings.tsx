import { Button, Input, Textarea } from "@shared/ui";
import { FaEdit, FaUser } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";

export function Settings() {
  return (
    <div className="w-full">
      <div className="flex gap-5 w-full">
        <div className="relative flex justify-center items-center rounded-full w-20 h-20 bg-zinc-300 mr-7">
          <FaUser size={28} color="white" />
          <div
            className="absolute bottom-0 right-0 flex justify-center items-center hover:bg-accent bg-accent-black 
            cursor-pointer transition-colors w-6 h-6 rounded-full"
          >
            <RiPencilFill color="white" />
          </div>
        </div>
        <div className="space-y-8 mt-10 w-full max-w-[400px]">
          <div className="flex items-center justify-between w-full">
            <div className="font-bold text-1.5xl">Name Surname</div>
            <div className="flex items-center gap-2 hover:text-accent cursor-pointer">
              <FaEdit size={22} />
              Edit
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="font-bold text-xl">
              Phone number: <span className="font-normal">123 456 78 90</span>
            </div>
            <div className="flex items-center gap-2 hover:text-accent cursor-pointer">
              <FaEdit size={22} />
              Edit
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="font-bold text-xl">
              Email: <span className="font-normal">some@mail.com</span>
            </div>
            <div className="flex items-center gap-2 hover:text-accent cursor-pointer">
              <FaEdit size={22} />
              Edit
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[445px] mt-10 md:mt-20">
        <div className="font-bold text-xl mt-8">Any questions left?</div>
        <div className="">
          <div className="flex flex-col gap-3 mt-5">
            <Input
              type="text"
              value={""}
              onChange={() => []}
              label="Your name"
              placeholder="Name"
            />
            <Input
              type="text"
              value={""}
              onChange={() => []}
              label="Your phone number"
              placeholder="+1 ___ ___ __ __"
            />
            <Textarea
              value=""
              onChange={() => []}
              label="Your comment"
              placeholder="Comment..."
            />
          </div>
          <Button
            title="Request a call"
            classes={"w-full mt-5 h-12 font-bold text-xl"}
          />
        </div>
      </div>
    </div>
  );
}
