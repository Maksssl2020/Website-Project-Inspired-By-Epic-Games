import Links from "./Links.jsx";
import IconsGroup from "./IconsGroup.jsx";
import { footerData } from "../../website-data/FooterData.js";

function Footer() {
  return (
    <div className="3xl:h-[520px] w-full bg-custom-gray-300">
      <div className="mx-auto grid h-full w-11/12 grid-rows-2">
        <div className="border-b-[1px] border-custom-emerald">
          <div className="mt-5 flex gap-2">
            <IconsGroup />
          </div>
          <div className="my-10 w-2/5">
            <span className="text-custom-gray-100">Resources</span>
            <div className="flex gap-8 text-custom-white">
              <Links linksData={["Careers", "Company", "Management"]} />
              <Links linksData={["Redeem code", "Help", "Games library"]} />
              <Links linksData={["Community", "User laws", "User agreement"]} />
              <Links linksData={["Press", "Investors", "Headquarters"]} />
            </div>
          </div>
        </div>
        <div className="3xl:text-sm border-t-[1px] border-custom-emerald text-custom-gray-100 2xl:text-xs">
          <div className="mt-8 w-1/2">
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
