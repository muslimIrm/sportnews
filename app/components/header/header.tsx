// components/Header.tsx
import Link from 'next/link';
import { IoSearchOutline } from 'react-icons/io5';
import Container from '../container/container';

const Header = () => {
    const navItems = [
        { name: 'Home', href: '#', active: true },
        { name: 'Category', href: '#category', active: false },
        { name: 'Trending News', href: '#trending', active: false },
        { name: 'Recent News', href: '#recent', active: false },
        { name: 'Clubs Ranking', href: '#ranking', active: false },
        { name: 'Sport Article', href: '#articles', active: false },
    ];

    return (
        <header className="w-full fixed py-4 z-999 border-b border-gray-100">
            <Container>
                <div className="flex items-center justify-between gap-4">

                    {/* القسم الأول: اسم البراند */}
                    <div className=" shrink-0">
                        <Link href="/" className="text-5xl font-darkline text-[#000000]">
                            Sport News
                        </Link>
                    </div>

                    {/* القسم الثاني: القائمة البرمجية (Navigation) */}
                    <nav className="hidden lg:flex items-center gap-6">
                        {navItems.map((item, index) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-[15px] font-sans font-medium transition-colors hover:text-[#262626] 
                  ${item.active ? "text-[#262626]" : "text-[#262626]/60"}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* القسم الثالث: زر البحث */}
                    <div className="flex-shrink-0">
                        <button className="flex items-center gap-2 bg-[#B8C2CE] px-4 py-2 rounded-md hover:bg-[#a5b1be] transition-all">
                            <IoSearchOutline className="text-white text-lg" />
                            <span className="text-white text-sm font-medium">Search</span>
                        </button>
                    </div>

                </div>
            </Container>
        </header>
    );
};

export default Header;