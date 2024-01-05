import Image from "next/image";
import fb from "../../public/assets/fb.png";
import linkedin from "../../public/assets/linkedin_logo.png";
import insta from "../../public/assets/ig.png";
import youtube from "../../public/assets/youtube_logo.png";
import HomeScreen from "../../pages/HomeScreen";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="hidden md:flex flex-col gap-4 fixed right-4 top-48 z-10">
        <Link href="https://www.facebook.com/iqschoolupskill/">
          <Image
            src={fb}
            alt="facebook"
            style={{ width: "40px", height: "40px" }}
          />
        </Link>

        <Link href="https://www.instagram.com/iqschool_upskill/">
          <Image
            src={insta}
            alt="instagram"
            style={{ width: "40px", height: "40px" }}
          />
        </Link>

        <Link href="https://www.linkedin.com/company/iqschool/">
          <Image
            src={linkedin}
            alt="linkedin"
            style={{ width: "40px", height: "40px" }}
          />
        </Link>

        <Link href="https://www.youtube.com/@IQSchoolupskill/">
          <Image
            src={youtube}
            alt="youtube"
            style={{ width: "40px", height: "40px" }}
          />
        </Link>
      </div>
      <HomeScreen />
    </>
  );
}
