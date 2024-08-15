import React from "react";
import { YouTubeEmbed } from "react-social-media-embed";
import Bg from "../assets/BG 1.png";
import profil from "../assets/profil.png";

const Profile = () => {
  return (
    <div
      className="-mt-8 h-full w-full bg-cover bg-no-repeat pb-10 md:pb-12 lg:pb-16"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="pt-7 pb-4 md:pt-12">
        <img
          className="mx-auto  h-full w-[80%] lg:mt-6 2xl:w-[80%] 2xl:mt-10"
          src={profil}
          alt="Gambar Tentang"
        />

        <div className="mt-6 md:mt-10 lg:mt-16">
          <div className="">
            <div className="w-[80%] h-[400px] xl:w-[60%] 2xl:w-[50%] mx-auto hidden md:flex justify-center items-center">
              <YouTubeEmbed
                url="https://www.youtube.com/embed/-HRtMaOgZLY?si=bKaOWoxXHE_fClgB"
                height={"400px"}
                width={"85%"}
              />
            </div>
            <div className="w-full md:hidden flex justify-center items-center">
              <YouTubeEmbed
                url="https://www.youtube.com/embed/-HRtMaOgZLY?si=bKaOWoxXHE_fClgB"
                height={"270px"}
                width={"85%"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
