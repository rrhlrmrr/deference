import React from "react";

function Footer() {
  const socials = [
    {
      name: "Website",
      href: "https://decipher.ac/",
      imgUrl: "/img/website.png",
    },

    {
      name: "Medium",
      href: "https://medium.com/decipher-media",
      imgUrl: "/img/medium.png",
    },

    {
      name: "Twitter(X)",
      href: "https://twitter.com/decipherglobal",
      imgUrl: "/img/x-twitter.png",
    },

    {
      name: "Github",
      href: "https://github.com/decipherhub",
      imgUrl: "/img/github.png",
    },

    {
      name: "Instagram",
      href: "https://www.instagram.com/decipher_snu",
      imgUrl: "/img/instagram.png",
    },

    {
      name: "Youtube",
      href: "https://www.youtube.com/@decipher-media",
      imgUrl: "/img/youtube.png",
    },

    {
      name: "Facebook",
      href: "https://www.facebook.com/decipher.ac",
      imgUrl: "/img/facebook.png",
    },
  ];

  return (
    <div className="mt-[160px] w-full flex justify-center border-t border-[#333] py-[96px]">
      <div className="flex flex-row sm:flex-col items-center justify-between w-full max-w-[1131px] px-8">
        <div className="sm:mb-4">
          <img src="/img/logo.png" className="w-[150px]" alt="Logo" />
        </div>

        <div className="flex flex-col items-center mb-8 sm:mb-4">
          <div className="text-[16px] text-slate-300 mb-2">Follow us</div>
          <div className="flex justify-center items-center gap-3">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="w-30 h-30 rounded-lg border-[1.5px] border-[#556061] flex items-center justify-center hover:border-[#AD20E2] duration-150 ease-in-out"
              >
                <img
                  src={social.imgUrl}
                  alt={social.name}
                  className="w-10 h-10"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center">
          <a
            href="mailto:deference@decipher.ac"
            target="_blank"
            rel="noreferrer"
            className="flex items-center text-[25px] text-gray py-1 sm:py-8 underline hover:text-sky-500 duration-200 ease-in-out sm:mr-6"
          >
            <img src="/img/email.png" alt="Icon" className="w-4 h-4" />
            Contact to Decipher
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
