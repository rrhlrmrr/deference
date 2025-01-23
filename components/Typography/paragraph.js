export default function Paragraph({
  typeStyle = "body-lg",
  textColor = "text-gray",
  fontWeight,
  className,
  children,
  isYoutubeLink,
}) {
  let classNames = "";
  switch (typeStyle) {
    case "body-lg":
      classNames = `text-[20px] sm:text-[16px] ${fontWeight} ${
        className || ""
      }`;
      break;
    case "body-md":
      classNames = `text-md ${fontWeight} ${className || ""}`;
      break;
    case "body-sm":
      classNames = `text-sm ${fontWeight} ${className || ""}`;
      break;
    default:
      classNames = `text-lg font-regular ${className || ""}`;
  }

  return isYoutubeLink ? (
    <a target="_blank" href={children} rel="noreferrer">
      <div className={`${textColor} ${classNames} flex gap-2 items-center`}>
        <img src="/img/youtube.png" alt="youtube" className="w-5 h-4" />
        <p>Youtube Link</p>
      </div>
    </a>
  ) : (
    <p className={`${textColor} ${classNames}`}>{children}</p>
  );
}
