import {} from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
      <header className="w-full border-b">
        <div className="flex-between">
          <div className="flex-start px-10">
            <Link href="/">
              <Image
                src="/images/trendora_logo.svg"
                alt="logo"
                width={120}
                height={120}
                priority={true}
              />
            </Link>
          </div>
        </div>
      </header>
    );
}
 
export default Header;

// #362e54
// #5a5183
// #868ebb
// #7a7143
// #ac9e74