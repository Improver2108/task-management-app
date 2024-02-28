import Image from 'next/image';
import svgIcon from '../../public/Designer.svg';
const bannerIcon: string = svgIcon as string

type TDimensions = {
    width: number,
    height: number
}

const BannerIcon = ({ width, height }: TDimensions) => <Image src={bannerIcon} width={width} height={height} alt='banner icon is not there' />;

export { BannerIcon }