import style from '../style.css';
import stylem from '../style.module.css';
// import outstyle from '@/css/outside.css';
import outstyle from '../css/outside.css';
import Image from 'next/image';
import profile from "../../../public/vercel.svg";
console.log(profile);
import { vercel } from "../images/page";

const Tags = () => {
    return (
        <>
            <h1 className={`${stylem.red} ${stylem.font}`}>Welcome to Next tags</h1>
            {/* import direct image */}
            <Image
                src={profile}
                width={500}
                height={500}
            />
            {/* <img src={profile.src} alt="profile" /> */}

            {/* import image from external link */}
            <Image
                // to image from external link we have to first add the domain of external link
                // in next.config.mjs file
                src="https://www.pexels.com/photo/taj-mahal-and-the-four-minarets-1603650/"
                width={300}
                height={300}
            />

            {/* import image from image js file */}
            <Image
                src={vercel} />
        </>
    )
}

export default Tags;