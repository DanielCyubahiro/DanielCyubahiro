import Image from 'next/image';

const TechIcon = ({ src, alt }) => (
    <Image src={src} width={40} height={40} alt={alt} />
);
export default TechIcon;