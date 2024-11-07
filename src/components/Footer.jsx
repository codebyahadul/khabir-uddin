import Button from "./shared/Button";
import bg from '../assets/images/footerImg.png'
import { PhoneCall } from "lucide-react";
import { MdEmail } from "react-icons/md";
import { FaDribbble, FaGithub } from "react-icons/fa";
/* eslint-disable react/prop-types */
const SocialLink = ({ platform, username, icon }) => (
    <div className="flex flex-row-reverse items-center justify-between">
        <div className="w-12 h-12 flex items-center justify-center">
            {icon}
        </div>
        <div className="flex-1">
            <p className="text-[20px] leading-[26px] font-medium">{platform}</p>
            <p className="text-[16px] leading-[20.83px] text-gray-400">{username}</p>
        </div>
    </div>
);

export default function Footer() {

    return (
        <footer className="bg-[#0C0E0D] text-white py-16 px-4 sm:px-4 lg:px-8 bg-no-repeat bg-bottom" style={{ backgroundImage: `url(${bg})` }}>
            <div className="max-w-[1120px] mx-auto">
                <h2 className="text-xs uppercase tracking-wider mb-8 text-center">
                    Let&apos;s talk
                </h2>
                <h3 className="text-3xl md:text-5xl  md:text-[68px] leading-[40px] font-bold text-center mb-12 max-w-3xl mx-auto border-t border-[#FDFDFD59]">
                    Ready to Bring Your Ideas to Life?
                </h3>
                <div className="flex flex-col sm:flex-row gap-8 pt-4 pb-16 md:py-32 w-full">
                    <Button text={"Write a Message"} size="w-full py-4" />
                    <Button text={"Discuss Project"} size="w-full py-4"/>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="border-t border-[#FDFDFD59] pt-4">
                        <SocialLink
                            platform="Phone"
                            username="+123-456-7890"
                            icon={<PhoneCall className="w-8 h-8 text-white"/>}
                        />
                    </div>
                    <div className="border-t border-[#FDFDFD59] pt-4">
                        <SocialLink
                            platform="Email"
                            username="mdkabiru857@gmail.com"
                            icon={<MdEmail className="w-8 h-8 text-white"/>}
                        />
                    </div>
                    <div className="border-t border-[#FDFDFD59] pt-4">
                        <SocialLink
                            platform="GitHub"
                            username="@khabiruddin"
                            icon={<FaGithub className="w-8 h-8 text-white"/>}
                        />
                    </div>
                    <div className="border-t border-[#FDFDFD59] pt-4">
                        <SocialLink
                            platform="Dribbble"
                            username="@khabiruddin"
                            icon={<FaDribbble className="w-8 h-8 text-white"/>}
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}



