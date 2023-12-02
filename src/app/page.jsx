import Image from "next/image";
// import Landing from "../../components/Landing";
import fb from "../../public/assets/fb.png";
import linkedin from "../../public/assets/linkedin_logo.png";
import insta from "../../public/assets/ig.png";
import youtube from "../../public/assets/youtube_logo.png";
import Landing from "../../components/Landing";

export default function Home() {
  return (
    <>
      <div className="fixed right-4 top-48 flex flex-col gap-4">
        <Image
          src={fb}
          alt="facebook"
          style={{ width: "40px", height: "40px" }}
        />
        <Image
          src={insta}
          alt="instagram"
          style={{ width: "40px", height: "40px" }}
        />
        <Image
          src={linkedin}
          alt="linkedin"
          style={{ width: "40px", height: "40px" }}
        />
        <Image
          src={youtube}
          alt="youtube"
          style={{ width: "40px", height: "40px" }}
        />
      </div>
      <Landing />
    </>
  );
}
