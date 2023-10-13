import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import patientAvatar from "../../assets/images/patient.png";
import femalePatientAvatar from "../../assets/images/femalePatient.png";
import { HiStar } from "react-icons/hi";

const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3 ">
            <div className="flex items-center gap-[13px]">
              <img src={femalePatientAvatar} alt="" className="w-20 h-20 "/>
              <div>
                <h4 className="text-[18px] leading-[30px] text-headingColor font-[600]">
                  Amina Ali
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              “I have taken medical services from them. They treat so well and
              they are provding the best medical services.”
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3 ">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" className="w-20 h-20 "/>
              <div>
                <h4 className="text-[18px] leading-[30px] text-headingColor font-[600]">
                 Haider
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
            “This app has made healthcare management incredibly convenient. 
            I highly recommend it to anyone seeking efficient medical services.”

            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3 ">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="" className="w-20 h-20 "/>
              <div>
                <h4 className="text-[18px] leading-[30px] text-headingColor font-[600]">
                  Ahmed Malik
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
            “I've been using this app for a while now, and it never disappoints. 
            The healthcare providers are excellent, and I appreciate the ease of 
            scheduling appointments.”

            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3 ">
            <div className="flex items-center gap-[13px]">
              <img src={femalePatientAvatar} alt="" className="w-20 h-20 " />
              <div>
                <h4 className="text-[18px] leading-[30px] text-headingColor font-[600]">
                  Ayesha Khan
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              “Booking appointments through this app is a breeze, and the healthcare 
              professionals are highly skilled and caring. I'm grateful for the 
              convenience it offers!”
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3 ">
            <div className="flex items-center gap-[13px]">
              <img src={femalePatientAvatar} alt="" className="w-20 h-20 "/>
              <div>
                <h4 className="text-[18px] leading-[30px] text-headingColor font-[600]">
                  Sara Ahmed
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
            “I've had a wonderful experience using this app. It's incredibly user-friendly, 
            and the healthcare professionals are both skilled and compassionate. 
            I trust this app with my medical needs.”


            </p>
          </div>
        </SwiperSlide>

        
      </Swiper>
    </div>
  );
};

export default Testimonial;
