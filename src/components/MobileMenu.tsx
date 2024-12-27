import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  navigation: Array<{ name: string; href: string }>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ navigation }) => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="p-2 md:hidden">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[240px] sm:w-[280px]">
        <nav className="flex flex-col gap-4 mt-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                router.pathname === item.href
                  ? 'text-primary'
                  : 'text-muted-foreground'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)}>
            <Button
              variant="default"
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500"
            >
              Get Started
            </Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;