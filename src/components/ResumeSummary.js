import React from "react";
import UserIcon from "../assets/user.png";
import PhoneIcon from "../assets/phone.png";
import AddressIcon from "../assets/address.png";
import MailIcon from "../assets/mail.png";

const ResumeSummary = ({ formData }) => {

    return (
      <div className="relative bg-white w-[1054px] h-[1808px] overflow-hidden flex flex-row pt-[90px] px-0 pb-[190px] box-border items-start justify-center gap-[58px] text-left text-11xl text-gray-4 font-roboto-slab">
        <div className="relative w-[403px] h-[1671px] overflow-hidden shrink-0">
          <div className="absolute top-[1065px] left-[0px] w-[403px] h-[570px] flex flex-col items-start justify-start">
            <div className="w-[380px] overflow-hidden flex flex-col items-start justify-start gap-[2px]">
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[71px]">
                <b className="self-stretch relative tracking-[0.03em]">
                Experience: {formData.experience}
                </b>
                <div className="relative text-[28px] tracking-[0.03em] text-gray-2 text-right flex items-center w-[367px] h-[47px] shrink-0">
                    {formData.position1}
                </div>
              </div>
              <div className="self-stretch relative bg-antiquewhite h-[3px]" />
            </div>
            <div className="w-[544px] overflow-hidden flex flex-col items-start justify-start gap-[152px] mt-[-135px] text-xl text-gray-3">
              <div className="relative tracking-[0.03em] leading-[170%] flex items-center w-[354px] h-[34px] shrink-0 mt-[23px]">
              {formData.company1}
              </div>
              <div className="relative text-5xl tracking-[0.03em] leading-[50px] text-color inline-block w-[389px] h-[359px] shrink-0">
              Specialization: {formData.specialization}
              <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit magna aliqua.
              </div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[1px] w-[532px] h-[439px] overflow-hidden flex flex-row items-center justify-start gap-[79px]">
            <div className="relative bg-peru-100 w-[50px] h-[600px]" />
            <img
              className="relative w-[484px] h-[602px] object-cover"
              alt="user"
              src={UserIcon}
            />
          </div>
          <div className="absolute top-[493px] left-[7px] w-[400px] h-[168px] overflow-hidden flex flex-col items-start justify-start">
            <section
              className="w-[400px] flex flex-col items-start justify-start text-right text-[60px] text-peru-100 font-roboto-slab"
              id="firstName"
            >
              <h1 className="m-0 relative text-[inherit] tracking-[0.12em] font-bold font-inherit [-webkit-text-stroke:3px_#bb7a3b]">{formData.firstName}</h1>
              <h1 className="m-0 relative text-[58px] tracking-[0.03em] font-normal font-inherit text-gray inline-block w-[286px]">
              {formData.lastName}
              </h1>
            </section>
          </div>
          <div className="absolute top-[699px] left-[7px] text-[40px] tracking-[0.03em] text-gray-2 inline-block w-[396px] h-[172px]">{`DESIGN & FONTEND DEVELOPER`}</div>
          <div className="absolute top-[904px] left-[7px] w-[831px] h-[107px] text-17xl text-gray">
            <div className="absolute h-[43.93%] w-[32.91%] top-[0%] left-[0%] tracking-[0.11em] uppercase font-black inline-block">
              WORK EXPERIENCE
            </div>
            <div className="absolute top-[98px] left-[0px] w-[712px] hidden flex-row items-center justify-start">
              <div className="flex-1 relative bg-peru-200 h-[11px]" />
              <div className="flex-1 relative bg-peru-100 h-[11px] ml-[-712px]" />
            </div>
            <div className="absolute top-[98px] left-[1px] bg-peru-200 w-[450px] flex flex-col items-start justify-center">
              <div className="relative bg-peru-100 w-[166px] h-[11px]" />
            </div>
          </div>
          <div className="absolute top-[2361px] left-[7px] w-[1274px] overflow-hidden flex flex-col items-center justify-start">
            <div className="self-stretch" />
            <div className="self-stretch mt-[-10px]" />
          </div>
        </div>
        <div className="relative w-[500px] h-[1695px] overflow-hidden shrink-0 text-xl text-gray-1">
          <section
            className="absolute top-[0px] left-[0px] w-[611px] h-[59px] text-left text-17xl text-gray font-roboto-slab"
            id="contact"
          >
            <h2 className="m-0 absolute h-[43.93%] w-[32.91%] top-[0%] left-[0%] text-[inherit] tracking-[0.11em] uppercase font-black font-inherit inline-block">
              Contact
            </h2>
            <div className="absolute top-[98px] left-[0px] w-[712px] hidden flex-row items-center justify-start">
              <div className="flex-1 relative bg-peru-200 h-[11px]" />
              <div className="flex-1 relative bg-peru-100 h-[11px] ml-[-712px]" />
            </div>
            <div className="absolute top-[98px] left-[1px] bg-peru-200 w-[450px] flex flex-col items-start justify-center">
              <div className="relative bg-peru-100 w-[166px] h-[11px]" />
            </div>
          </section>
          <div className="absolute top-[633px] left-[4px] w-[443px] flex flex-col items-start justify-start text-[32px] text-gray">
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[113px]">
              <div className="relative w-[674px] h-[52px]">
                <h2 className="m-0 absolute h-[43.93%] w-[32.91%] top-[0%] left-[0%] text-[inherit] tracking-[0.11em] uppercase font-black font-inherit inline-block">
                  EDUCATION
                </h2>
                <div className="absolute top-[98px] left-[0px] w-[712px] hidden flex-row items-center justify-start">
                  <div className="flex-1 relative bg-peru-200 h-[11px]" />
                  <div className="flex-1 relative bg-peru-100 h-[11px] ml-[-712px]" />
                </div>
                <div className="absolute top-[98px] left-[1px] bg-peru-200 w-[450px] flex flex-col items-start justify-center">
                  <div className="relative bg-peru-100 w-[166px] h-[11px]" />
                </div>
              </div>
              <div className="self-stretch relative h-[237px] text-11xl text-darkgray">
                <div className="absolute top-[55px] left-[-1px] w-[223px] h-10 flex flex-row items-center justify-start gap-[15px]">
                  <div className="relative bg-antiquewhite w-[46.02px] h-1.5" />
                  <div className="relative text-[15px] tracking-[0.03em]">Percentage: {formData.sscHscPercentage}</div>
                </div>
                <div className="absolute top-[2px] left-[-1px] w-[444px] overflow-hidden flex flex-col items-start justify-start gap-[73px] text-5xl text-gray-2">
                  <div className="self-stretch relative tracking-[0.03em] uppercase">
                  {formData.highestDegree}
                  </div>
                  <div className="self-stretch relative tracking-[0.03em] text-gray-1">
                  {formData.school}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[1091px] left-[5px] w-[565px] h-[65px] text-17xl text-gray">
            <div className="absolute h-[43.93%] w-[32.91%] top-[0%] left-[0%] tracking-[0.11em] uppercase font-black inline-block">
              Hobbies
            </div>
            <div className="absolute top-[98px] left-[0px] w-[712px] hidden flex-row items-center justify-start">
              <div className="flex-1 relative bg-peru-200 h-[11px]" />
              <div className="flex-1 relative bg-peru-100 h-[11px] ml-[-712px]" />
            </div>
            <div className="absolute top-[98px] left-[1px] bg-peru-200 w-[450px] flex flex-col items-start justify-center">
              <div className="relative bg-peru-100 w-[166px] h-[11px]" />
            </div>
          </div>
          <div className="absolute top-[1244px] left-[0px] text-5xl tracking-[0.03em] leading-[170%] text-color flex items-center w-[444px] h-[352px]">
          {formData.hobbies}
          </div>
          <div className="absolute top-[195px] left-[10px] w-[400px] h-20 overflow-hidden flex flex-row items-center justify-start gap-[35px]">
            <img
              className="relative w-20 h-20 overflow-hidden shrink-0"
              alt="phone"
              src={PhoneIcon}
            />
            <span
              className="relative tracking-[0.05em] inline-block w-[270px] h-8 shrink-0"
              id="phoneNumber"
            >
              {formData.phoneNumber}
            </span>
          </div>
          <div className="absolute top-[415px] left-[9px] w-[447px] overflow-hidden flex flex-row items-center justify-between">
            <img
              className="relative w-20 h-20 overflow-hidden shrink-0"
              alt="address"
              src={AddressIcon}
            />
            <span
              className="relative tracking-[0.05em] inline-block w-[347px] h-8 ml-[1em] shrink-0"
              id="city"
            >
              {formData.city}
            </span>
          </div>
          <div className="absolute top-[305px] left-[9px] w-[492px] h-20 overflow-hidden flex flex-row items-center justify-start gap-[33px]">
            <img
              className="relative w-20 h-20 overflow-hidden shrink-0"
              alt="mail"
              src={MailIcon}
            />
            <span
              className="relative tracking-[0.05em] inline-block w-[353px] h-8 shrink-0"
              id="email"
            >
              {formData.email}
            </span>
          </div>
        </div>
      </div>
    );
  };


export default ResumeSummary;
  