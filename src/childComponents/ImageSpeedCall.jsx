import React from "react";
import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Typography,
  DialogBody,
  Dialog,
} from "@material-tailwind/react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ImageSpeedCall = ({ link }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const copyToClipboard = () => {
    const el = document.createElement("textarea");
    el.value = link;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setIsCopied(true);
    toast.success("CDN Link Copy Successful!");
  };

  const labelProps = {
    variant: "small",
    color: "white",
    className:
      "absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-normal w-[120px]",
  };

  return (
    <div className="relative h-80 w-full">
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="absolute bottom-0 right-0">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full">
              <i className="fa-regular fa-plus h-5 w-5 transition-transform group-hover:rotate-45"></i>
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            <SpeedDialAction className="relative">
              <i className="fa-sharp fa-regular fa-trash h-5 w-5 text-card"></i>
              <Typography {...labelProps}>Delete</Typography>
            </SpeedDialAction>
            <button onClick={handleOpen}>
              <SpeedDialAction className="relative">
                <i className="fa-light fa-expand h-5 w-5 text-card"></i>
                <Typography {...labelProps}>View</Typography>
              </SpeedDialAction>
            </button>
            <button onClick={copyToClipboard}>
              <SpeedDialAction className="relative ">
                <i className="fa-light fa-copy h-5 w-5 text-card"></i>
                <p {...labelProps}>{isCopied ? "Link Copied!" : "Copy CDN"}</p>
              </SpeedDialAction>
            </button>
          </SpeedDialContent>
        </SpeedDial>
      </div>
      <Dialog
        size="xl"
        open={open}
        handler={handleOpen}
        className="overflow-hidden rounded-xl"
      >
        <DialogBody className=" p-0">
          <img
            alt="nature"
            className="h-[48rem] w-full  object-cover object-center"
            src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
          />
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default ImageSpeedCall;
