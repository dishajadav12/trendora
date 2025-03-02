import { ShoppingCart, UserIcon } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../button';

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
            <div className="flex flex-end">
              <Button
                asChild
                variant="ghost"
                className="hover:bg-transparent hover:text-custom-bk-blue-100 "
              >
                <Link href="/cart">
                  <ShoppingCart size={24} /> Cart
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="hover:bg-transparent hover:text-custom-bk-blue-100"
              >
                <Link href="/sign-in">
                  <UserIcon size={24} /> Sign In
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
    );
}
 
export default Header;

