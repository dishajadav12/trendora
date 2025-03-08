import Image from 'next/image';
import Link from 'next/link';

import Menu from './menu';

const Header = () => {
    return (
      <header className="w-full shadow-md lg:px-10 px-2">
        <div className="flex flex-between">
          <div>
            <Link href="/">
              <Image
                src="/images/trendora_logo.svg"
                alt="logo"
                width={100}
                height={100}
                priority={true}
              />
            </Link>
          </div>
          <div className="text-custom-bk-blue-200">
            <Menu />
          </div>
        </div>
      </header>
    );
}
 
export default Header;

