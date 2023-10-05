import { Carousel } from "antd";
import MainContainer from "../../sub-components/MainContainer";
import SearchSliderImage1 from "../../assets/svg-icons/search-image-slider1.svg";
import SearchSliderImage2 from "../../assets/svg-icons/search-image-slider2.svg";
import SearchForm from "../../sub-components/SearchForm";
import { useState } from "react";
import UploadImageModal from "../../sub-components/UploadImageModal";

const SearchByImage = () => {
  const [imageUploadModal, setImageUploadModal] = useState(false);
  return (
    <>
      <MainContainer>
        <div className="search-by-image relative">
          <Carousel
            autoplay
            dots={false}
            slidesToScroll={1}
            speed={500}
            infinite={true}
          >
            <div className="search-image-item">
              <img src={SearchSliderImage1} alt="search-slider-image" />
            </div>
            <div className="search-image-item">
              <img src={SearchSliderImage2} alt="search-slider-image" />
            </div>
          </Carousel>
          <div className="absolute w-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 container">
            <SearchForm onClick={() => setImageUploadModal(true)} />
          </div>
        </div>
      </MainContainer>
      {imageUploadModal && (
        <UploadImageModal
            open={imageUploadModal}
            handleClose={()=>setImageUploadModal(false)}
            title={""}
        />
      )}
    </>
  );
};

export default SearchByImage;
