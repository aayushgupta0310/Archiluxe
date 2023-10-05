import ComponentModal from "../../atoms/ComponentModal";
import UploadImage from "../../assets/svg-icons/upload-image.svg";
import { PlusCircleFilled } from "@ant-design/icons";
import { Button } from "antd";

const UploadImageModal = ({ open, handleClose, title }) => {
  return (
    <ComponentModal
      open={open}
      handleClose={handleClose}
      title={title}
      width={"700px"}
    >
      <div className="px-10 py-12">
        <div className="bg-[#F6F6F6] border-dashed border-[#B4B4B4] rounded-[4px] px-14 py-[70px]">
          <div className="pb-7">
            <img src={UploadImage} alt="Upload Image" className="m-auto" />
          </div>
          <Button className="flex items-center gap-2 bg-[#946039] h-10 w-[181px] mx-auto">
            <PlusCircleFilled className="text-[#ffffff]" />
            <p className="text-sm font-bold text-white">Upload your image</p>
          </Button>
          <div className="text-[#8D8D8D] font-medium text-sm pt-[10px] text-center">
            <p>
              Drop an image or Paste <span className="underline text-[#946039]">URL</span>
            </p>
          </div>
          <div className="text-xs text-[#444] text-center pt-[50px]">
            <p className="pb-[5px]">Supported formats: png / jpeg / jpg / webp</p>
            <p>By uploading an image or URL you agree to our <span className="underline">Terms of Use</span> and <span className="underline">Privacy Policy</span>.</p>
          </div>
        </div>
      </div>
    </ComponentModal>
  );
};

export default UploadImageModal;
