import { Button, Input, Textarea } from "@shared/ui";
import { CiMail } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { TbPhoneCall } from "react-icons/tb";

export const Contacts = () => {
  return (
    <div className="grid mt-7 grid-cols-1 md:grid-cols-2 md:justify-between justify-center">
      <div className="title col-start-1 col-end-2 row-start-1 row-end-2">
        Contacts
      </div>
      <div className="">
        <div className="flex flex-col gap-4 col-start-1 col-end-2 md:row-start-2 md:row-end-3 row-start-3 row-end-4 mt-3">
          <div className="flex items-center gap-2">
            <TbPhoneCall size={30} />
            <div className="">
              <span>Phone:</span>
              +1 (234) 567-89-00
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CiMail size={30} />
            <div className="">
              <span>Email:</span>
              some@mail.com
            </div>
          </div>
          <div className="flex items-center gap-2">
            <IoLocationOutline size={32} />
            <div className="">
              <span>Address:</span>
              City, stage street home number
            </div>
          </div>
          <div className="flex items-center gap-2">
            <GoClock size={30} />
            <div className="">
              <span>Club opening hours:</span>
              11:00-23:00 (daily)
            </div>
          </div>
        </div>
        <div className="font-bold text-xl mt-8">Any questions left?</div>
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
        <div className="mt-4">
          By clicking the "Request a call" button, I consent to the{" "}
          <span className="underline">processing of my personal data</span>.
        </div>
      </div>
      <div className="w-[100%] md:w-[90%] aspect-video md:aspect-auto md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3 row-start-2 row-end-3 mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4491.399576782732!2d37.651021985939266!3d55.74634500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54aeea4e56e93%3A0x67041e70098fcd3b!2z0K7QoCDQptCV0J3QotCg!5e0!3m2!1sru!2str!4v1777237130594!5m2!1sru!2str"
          className="w-full h-full"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
