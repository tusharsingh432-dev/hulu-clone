import { HomeIcon, LightningBoltIcon, CollectionIcon, BadgeCheckIcon, SearchIcon, UserIcon } from '@heroicons/react/outline'
import Image from "next/image";
import HeaderItems from './HeaderItems';

function Header() {
    return (
        <header className="flex flex-col sm:flex-row items-center justify-between">
            <div className='flex flex-grow justify-evenly max-w-2xl mt-5'>
                <HeaderItems text="HOME" Icon={HomeIcon} />
                <HeaderItems text="TRENDING" Icon={LightningBoltIcon} />
                <HeaderItems text="VERIFIED" Icon={BadgeCheckIcon} />
                <HeaderItems text="COLLECTIONS" Icon={CollectionIcon} />
                <HeaderItems text="SEARCH" Icon={SearchIcon} />
                <HeaderItems text="USER" Icon={UserIcon} />
            </div>
            <Image src="https://links.papareact.com/ua6" width={200} height={100} alt="Hulu Logo" className="object-contain" />
        </header>
    );
}

export default Header;
