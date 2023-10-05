import React, { useState } from "react";
import MainContainer from "../../sub-components/MainContainer";
import HomeBannerImage from "../../assets/svg-icons/home-banner.svg";
import SearchForm from "../../sub-components/SearchForm";
import DiscoverDesignChair from "../../assets/svg-icons/chair-home.svg";
import ComponentButton from "../../atoms/ComponentButton";
import InteriorDesignHome from "../../assets/svg-icons/interior-design-room.svg";
import CarouselImage1 from "../../assets/svg-icons/carousel-image1.svg";
import CarouselImage2 from "../../assets/svg-icons/carousel-image2.svg";
import CarouselImage3 from "../../assets/svg-icons/carousel-image3.svg";
import MinimalWallpaper from "../../assets/svg-icons/minimal-wallpaper.svg";
import ModernWallpaper from "../../assets/svg-icons/modern-wallpaper.svg";
import IndustrialWallpaper from "../../assets/svg-icons/industrial-wallpaper.svg";
import { Carousel, Form, Input } from "antd";
import { RightOutlined } from "@ant-design/icons";
import SupplierCarousel from "../../sub-components/Supplier-Carousel";
import ComponentCollapse from "../../atoms/ComponentCollapse";
import { useNavigate } from "react-router";
import {  SEARCH_BY_IMAGE_URL } from "../../routes";

const Home = () => {
  const carouselRef = React.createRef();
  const navigate = useNavigate();
  return (
    <MainContainer>
      {/* banner section */}
      <div className="relative">
        <img
          src={HomeBannerImage}
          alt="Home Banner"
          className="h-screen w-full object-cover"
        />
        <div className="container absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full">
          <div className="text-white text-[57.91px]  max-w-[772px] font-GeorgiaRegular leading-[65px]">
            Discover Endless Possibilities for Your Dream Home.
          </div>
        </div>
      </div>
      {/* search type form */}
      <div className="mt-[-46px] relative z-20">
        <SearchForm onClick ={()=>navigate(SEARCH_BY_IMAGE_URL)}/>
      </div>
      {/* Discover Design */}
      <div className="container pb-16">
        <img src={DiscoverDesignChair} alt="Design Chair" className="mx-auto" />
        <div className="flex gap-6 items-center flex-col mt-[-50px]">
          <p className="max-w-[590px] w-full text-[#444] leading-6 text-base">
            Welcome to <span className="text-[#8A624A]">Archiluxe</span>, your ultimate destination for exploring a vast
            array of interior design materials. With our cutting-edge AI
            technology, we bring you a seamless experience of discovering the
            perfect materials for your dream space.
          </p>
          <ComponentButton
            title={"Discover"}
            style={{
              width: "200px",
              borderRadius: "4px",
              border: "1px solid #946039",
              fontSize: "14px",
              height: "32px",
              color: "#946039",
            }}
          />
        </div>
      </div>
      <img src={InteriorDesignHome} alt="interior-home" />
      {/* Why Us */}
      <div className="container py-24 flex gap-28">
        <div className="text-[#444] w-[40%] max-w-[387px] text-[40px] font-GeorgiaRegular">
          Why Us
        </div>
        <div className="w-[60%] text-[#444] text-base leading-6">
          <p>
            Our user-friendly interface, exceptional customer service, and
            commitment to staying up-to-date with the latest trends make us the
            go-to resource for designers and homeowners alike.
          </p>
          <div className="grid grid-cols-2 gap-10 pt-10">
            <div>
              <div className="text-[#946039] text-[40px] font-bold leading-[60px]">
                800+
              </div>
              <p>Our user-friendly interface, exceptional customer service.</p>
            </div>
            <div>
              <div className="text-[#946039] text-[40px] font-bold leading-[60px]">
                350+
              </div>
              <p>Our user-friendly interface, exceptional customer service.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Inspired By */}
      <div className="relative">
        <div className="container text-[#444] flex gap-28 py-5">
          <div className="w-[40%] max-w-[387px]">
            <div className="text-[40px] leading-[52px] pb-7 font-GeorgiaRegular">
              Inspired by Our Featured Lookbook
            </div>
            <p className="text-base leading-6 pb-7">
              Immerse yourself in a world of design inspiration as you explore
              our collection of featured projects. From stunning residential
              interiors to awe-inspiring commercial spaces
            </p>
            <ComponentButton
              title={"Explore"}
              style={{
                width: "200px",
                borderRadius: "4px",
                border: "1px solid #946039",
                fontSize: "14px",
                height: "32px",
                color: "#946039",
              }}
            />
          </div>
          <div className="w-[60%] carousel-home">
            <div className="absolute right-0 w-[60%] top-5">
              <Carousel
                autoplay
                slidesToShow={3}
                dots={false}
                slidesToScroll={1}
                speed={500}
                infinite={true}
                ref={carouselRef}
              >
                <div className="carousel-item">
                  <img src={CarouselImage1} alt="carousel-image" />
                </div>
                <div className="carousel-item">
                  <img src={CarouselImage2} alt="carousel-image" />
                </div>
                <div className="carousel-item">
                  <img src={CarouselImage3} alt="carousel-image" />
                </div>
                <div className="carousel-item">
                  <img src={CarouselImage2} alt="carousel-image" />
                </div>
              </Carousel>
              <div
                className="absolute top-1/2 -translate-y-1/2 bg-black/[50%] right-0 px-5 py-[30px] cursor-pointer"
                onClick={() => {
                  carouselRef.current.next();
                }}
              >
                <RightOutlined className="text-[28px] text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Dream House Awaits You */}
      <div className="container text-[60px] text-[#535353] italic leading-[78px] py-[120px] font-GeorgiaRegular">
        Your dream home awaits —<br /> A haven where your personal style meets
        comfort and elegance.
      </div>
      <div className="flex gap-9">
        <div>
          <div className="relative">
            <img src={ModernWallpaper} alt="Modern" />
            <div className="absolute bottom-10 left-[15%]">
              <h3 className="text-white text-[40px] pb-5 leading-[52px] font-GeorgiaRegular">
                Modern
              </h3>
              <ComponentButton
                title={"Explore"}
                style={{
                  width: "127px",
                  borderRadius: "4px",
                  border: "1px solid #ffffff",
                  fontSize: "14px",
                  height: "32px",
                  color: "#ffffff",
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="relative">
            <img src={MinimalWallpaper} alt="Minimal" />
            <div className="absolute bottom-10 left-[56px]">
              <h3 className="text-white text-[40px] pb-5 leading-[52px] font-GeorgiaRegular">
                Minimal
              </h3>
              <ComponentButton
                title={"Explore"}
                style={{
                  width: "127px",
                  borderRadius: "4px",
                  border: "1px solid #ffffff",
                  fontSize: "14px",
                  height: "32px",
                  color: "#ffffff",
                }}
              />
            </div>
          </div>
          <div className="relative">
            <img src={IndustrialWallpaper} alt="Industrial" />
            <div className="absolute bottom-10 left-[56px]">
              <h3 className="text-white text-[40px] pb-5 leading-[52px] font-GeorgiaRegular">
                Industrial
              </h3>
              <ComponentButton
                title={"Explore"}
                style={{
                  width: "127px",
                  borderRadius: "4px",
                  border: "1px solid #ffffff",
                  fontSize: "14px",
                  height: "32px",
                  color: "#ffffff",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* material suppliers */}
      <div className="py-24">
        <h3 className="text-[40px] leading-[52px] text-center text-[#535353] pb-6 heading-small-border font-GeorgiaRegular">
          Over 2000 World-class Material Suppliers
        </h3>
        <div>
          <SupplierCarousel />
        </div>
        <div className="text-center">
          <ComponentButton
            title={"Discover"}
            style={{
              width: "200px",
              borderRadius: "4px",
              border: "1px solid #946039",
              fontSize: "14px",
              height: "32px",
              color: "#946039",
            }}
          />
        </div>
      </div>
      {/* frequently questions asked */}
      <div className="py-[53px] bg-[#F4E7D8] relative">
        <div className="container grid grid-cols-2 gap-20">
          <div className="py-[42px]">
            <h3 className="text-[#535353] text-[40px] leading-[52px] font-GeorgiaRegular">
              Frequently Asked Questions
            </h3>
            <div className="pt-[63px] collapse-tabs-design">
              <ComponentCollapse />
            </div>
          </div>
          <div className="py-[42px] pl-[62px] bg-white white-bg-after z-10">
            <h3 className="text-[#535353] text-[40px] leading-[52px] font-GeorgiaRegular">
              Can’t Find the Answer?
            </h3>
            <p className="text-[#444] text-base leading-6 py-[16px]">
              If you have any specific questions regarding our services or
              features, please feel free to ask. We're here to help and provide
              you with the information you need.
            </p>
            <Form
              autoComplete="off"
              initialValues={{ remember: true }}
              layout="vertical"
              className="form-design"
            >
              <Form.Item
                label="Email"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Email Address!",
                  },
                ]}
              >
                <Input placeholder="Enter Your e-mail" />
              </Form.Item>
              <Form.Item>
                <Input.TextArea
                  placeholder="Leave your questions..."
                  style={{
                    height: "168px",
                    resize: "none",
                  }}
                />
              </Form.Item>
              <Form.Item>
                <ComponentButton
                  title={"Submit"}
                  style={{
                    width: "88px",
                    borderRadius: "4px",
                    border: "1px solid #946039",
                    fontSize: "14px",
                    height: "32px",
                    color: "#946039",
                  }}
                />
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Home;
