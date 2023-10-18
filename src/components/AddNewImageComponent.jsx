import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AddNewImageComponent = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  // Function to handle file input change
  const handleFileChange = (event) => {
    const files = event.target.files;
    const selectedImagesArray = Array.from(files);
    setSelectedImages((prevImages) => [...prevImages, ...selectedImagesArray]);
  };

  // Function to remove a single image by index
  const removeImage = (index) => {
    toast.success("Image Remove Successful!");
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  // Function to remove all images
  const removeAllImages = () => {
    toast.success("All Image Remove Successful!");
    setSelectedImages([]);
  };

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="m-[30px] rounded-xl bg-[#36404A] p-[30px]">
        <div className="flex items-center gap-2">
          <p className="text-xl font-medium text-white">Add New Image/Images</p>
        </div>

        <div className="mt-[16px]">
          <div className="grid gap-5">
            <div className="mt-2 grid grid-cols-12 gap-[20px]">
              <div className=" col-span-4  rounded-md bg-[#3A444F]">
                <form className="px-9 py-6" method="POST">
                  <div className="mb-6 pt-4">
                    <label className="mb-5 block text-xl font-semibold text-white">
                      Upload File
                    </label>
                    <div className="mb-8">
                      <input
                        type="file"
                        name="file"
                        id="file"
                        className="sr-only"
                        accept="image/*"
                        multiple
                        onChange={handleFileChange}
                      />
                      <label
                        htmlFor="file"
                        className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                      >
                        <div>
                          <span className="mb-2 block text-xl font-semibold text-white">
                            Drop files here
                          </span>
                          <span className="mb-2 block text-base font-medium text-white">
                            Or
                          </span>
                          <span className="inline-flex rounded border border-[#e0e0e0] px-7 py-2 text-base font-medium text-white">
                            Browse
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-span-8 rounded-lg bg-[#3A444F] p-[30px]">
                <div className="relative ">
                  <div className="image-preview grid grid-cols-12 gap-[15px]">
                    {selectedImages.map((image, index) => (
                      <div
                        key={index}
                        className="image-container relative  h-[100px] w-[100px] xl:col-span-3 2xl:col-span-2"
                      >
                        <img
                          src={URL.createObjectURL(image)}
                          alt={`Img ${index}`}
                          className="preview-image h-full w-full rounded-lg border border-border object-cover p-4 "
                        />
                        <button
                          onClick={() => removeImage(index)}
                          className="absolute right-[-5px] top-[-20px] p-2"
                        >
                          <i className="fa-regular fa-xmark text-[26px] text-red-500"></i>
                        </button>
                      </div>
                    ))}
                  </div>
                  {selectedImages.length > 0 && (
                    <button
                      onClick={removeAllImages}
                      className="remove-all-button mt-4 rounded bg-red-500 px-3 py-2 text-sm"
                    >
                      Remove All
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-[30px] ">
        <button className="btn">Upload Image</button>
      </div>
    </>
  );
};

export default AddNewImageComponent;
