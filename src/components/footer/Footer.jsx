import Links from "./Links.jsx";
import IconsGroup from "./IconsGroup.jsx";
import { footerData } from "../../website-data/FooterData.js";

function Footer() {
  return (
    <div className="w-full bg-custom-gray-300 lg:h-[475px] 2xl:h-[520px]">
      <div className="mx-auto grid h-full w-11/12 grid-rows-2">
        <div className="border-b-[1px] border-custom-emerald">
          <div className="mt-5 flex gap-2">
            <IconsGroup />
          </div>
          <div className="my-10 w-full">
            <span className="text-custom-gray-100">Resources</span>
            <div className="flex gap-8 text-custom-white max-md:text-[14px] max-sx:text-[12px]">
              <Links linksData={["Careers", "Company", "Management"]} />
              <Links linksData={["Redeem code", "Help", "Games library"]} />
              <Links linksData={["Community", "User laws", "User agreement"]} />
              <Links linksData={["Press", "Investors", "Headquarters"]} />
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-custom-emerald text-custom-gray-100 max-md:text-xs 2xl:text-sm">
          <div className="mt-8 2xl:w-1/2">
            <span>{footerData[0].data}</span>
            <br />
            <span>{footerData[1].data}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
