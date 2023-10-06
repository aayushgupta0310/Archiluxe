import React from "react";
import MainContainer from "../../sub-components/MainContainer";
import SearchForm from "../../sub-components/SearchForm";
import RecognizationSampleImage from "../../assets/svg-icons/recognization-sample-img.svg";
import AiGenImage1 from "../../assets/svg-icons/ai-gen-1.svg";
import AiGenImage2 from "../../assets/svg-icons/ai-gen-2.svg";
import AiGenImage3 from "../../assets/svg-icons/ai-gen-3.svg";
import AiGenImage4 from "../../assets/svg-icons/ai-gen-4.svg";
import AiGenImage5 from "../../assets/svg-icons/ai-gen-5.svg";
import AiGenImage6 from "../../assets/svg-icons/ai-gen-6.svg";
import { Button, Carousel } from "antd";
import { CheckCircleFilled, RightOutlined } from "@ant-design/icons";

const AiRecognization = () => {
  const carouselRef = React.createRef();
  return (
    <MainContainer>
      <SearchForm />
      <div className="pt-[62px] pb-[129px] container grid grid-cols-6 gap-5">
        <div className="col-span-5">
          <img src={RecognizationSampleImage} alt="AI-RECOGNIZATION" />
        </div>
        <div className="col-span-1 flex flex-col justify-between">
          <div className="relative max-w-[85px]">
            <Carousel
              dotPosition="left"
              dots={false}
              slidesToShow={6}
              ref={carouselRef}
            >
              <div className="pb-4">
                <img src={AiGenImage1} alt="ai-gen-image" />
              </div>
              <div className="pb-4">
                <img src={AiGenImage2} alt="ai-gen-image" />
              </div>
              <div className="pb-4">
                <img src={AiGenImage3} alt="ai-gen-image" />
              </div>
              <div className="pb-4">
                <img src={AiGenImage4} alt="ai-gen-image" />
              </div>
              <div className="pb-4">
                <img src={AiGenImage5} alt="ai-gen-image" />
              </div>
              <div className="pb-4">
                <img src={AiGenImage6} alt="ai-gen-image" />
              </div>
              <div className="pb-[18px]">
                <img src={AiGenImage3} alt="ai-gen-image" />
              </div>
            </Carousel>
            <div
              className="rotate-90 max-w-fit absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer"
              onClick={() => {
                carouselRef.current.next();
              }}
            >
              <RightOutlined className="text-[20px] text-white" />
            </div>
          </div>
          <div>
            <Button
            //   onClick={onClick}
              className="flex items-center justify-center gap-2 bg-[#946039] h-[54px] w-[153px]"
            >
              <CheckCircleFilled className="text-[#ffffff] text-[28px]" />
              <p className="text-sm font-bold text-white">Complete</p>
            </Button>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default AiRecognization;
