"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Heart,
  LockIcon,
  LogOut,
  Package,
  PiggyBank,
  Search,
  ShoppingCart,
  User,
  User2,
  ChevronRight,
  FileTerminal,
  BookLock,
  HelpCircle,
  Menu,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const user = {
    profilePicture: "",
    name: "Hemant",
    email: "hemant@gmail.com",
  };

  const userPlaceHolder = "";
  const handleProtectiveNavigation = (to: string) => {};
  const handleLogout = () => {};
  const menuItems = [
    // ✅ Profile header (only if logged in)
    ...(user?.email
      ? [
          {
            href: "/account/profile",
            content: (
              <div className="flex space-x-4 items-center p-2 border-b">
                <Avatar className="h-12 w-12 rounded-full">
                  <AvatarFallback>{user.name?.charAt(0) || "U"}</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <span className="font-semibold text-md">{user.name}</span>
                  <span className="text-xs text-gray-500">{user.email}</span>
                </div>
              </div>
            ),
          },
        ]
      : []),

    // ✅ Main menu items
    {
      icon: <User className="h-4 w-4" />,
      label: "My Profile",
      onclick: () => handleProtectiveNavigation("/account/profile"),
    },
    {
      icon: <Package className="h-4 w-4" />,
      label: "My Orders",
      onclick: () => handleProtectiveNavigation("/account/orders"),
    },
    {
      icon: <PiggyBank className="h-4 w-4" />,
      label: "My sell order",
      onclick: () => handleProtectiveNavigation("/account/orders"),
    },
    {
      icon: <ShoppingCart className="h-4 w-4" />,
      label: "My Cart",
      onclick: () => handleProtectiveNavigation("/checkout/cart"),
    },
    {
      icon: <Heart className="h-4 w-4" />,
      label: "Wishlist",
      onclick: () => handleProtectiveNavigation("/checkout/cart"),
    },

    // ✅ Static pages
    {
      icon: <User2 className="h-4 w-4" />,
      label: "About Us",
      href: "/about-us",
    },
    {
      icon: <FileTerminal className="h-4 w-4" />,
      label: "Terms & Use",
      href: "/terms-and-use",
    },
    {
      icon: <BookLock className="h-4 w-4" />,
      label: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      icon: <HelpCircle className="h-4 w-4" />,
      label: "Help",
      href: "/help",
    },

    // ✅ Logout (only if logged in)
    ...(user?.email
      ? [
          {
            icon: <LogOut className="h-4 w-4" />,
            label: "Logout",
            onclick: handleLogout,
          },
        ]
      : []),
  ];

  const MenuItems = ({ className = "" }) => {
    return (
      <div className={className}>
        {menuItems &&
          menuItems.map((item, index) =>
            item.href ? (
              <Link
                href={item.href}
                key={index}
                className="flex items-center gap-3 px-4 py-3 text-sm rounded-lg hover:bg-gray-200"
                onClick={() => setIsDropdownOpen(false)}
              >
                {item.icon}
                <span>{item.label}</span>

                {item.content && <div className="mt-1">{item.content}</div>}

                <ChevronRight className="w-4 h-4 ml-auto" />
              </Link>
            ) : (
              <button
                key={index}
                className="flex w-full items-center gap-3 px-4 py-3 text-sm rounded-lg hover:bg-gray-200"
                onClick={item.onclick}
              >
                {item.icon}
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 ml-auto" />
              </button>
            )
          )}
      </div>
    );
  };

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      {/* desktop header */}
      <div className="container w-[80%] mx-auto hidden lg:flex items-center justify-between py-4">
        <Link href="/">
          <Image
            src="/images/web-logo.png"
            alt="Logo"
            width={450}
            height={100}
            className="h-15 w-auto"
          />
        </Link>
        <div className="flex flex-1 items-center justify-center max-w-xl px-4">
          <div className="relative w-full">
            <Input
              placeholder="Book Name/ Author / Publisher /Subject"
              className="w-full pr-10"
              type="text"
              value=""
              onChange={() => {}}
            />
            <Button
              size="icon"
              variant="ghost"
              className="absolute right-0 top-1/2 -translate-y-1/2"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/book-sell">
            <Button
              variant="secondary"
              className="bg-yellow-400 text-gray-900 hover:bg-yellow-500"
            >
              Sell Used Books
            </Button>
          </Link>
          <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2">
                <Avatar className="h-8 w-8 rounded-full">
                  {user?.profilePicture ? (
                    <AvatarImage alt="user_image"></AvatarImage>
                  ) : userPlaceHolder ? (
                    <AvatarFallback>{userPlaceHolder}</AvatarFallback>
                  ) : (
                    <User className="ml-2 mt-2" />
                  )}
                </Avatar>
                My Account
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 p-2">
              <MenuItems />
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/checkout/cart">
            <div className="relative">
              <Button className="relative" variant="ghost">
                <ShoppingCart className="h-5 w-5 mr-5" />
                Cart
              </Button>
              {user && (
                <span className="absolute top-2 left-3 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full px-1 text-xs">
                  2
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>

      {/* mobile */}
      <div className="container mx-auto flex lg:hidden items-center justify-between p-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 p-0">
            <SheetHeader>
              <SheetTitle className="sr-only"></SheetTitle>
            </SheetHeader>

            <div className="border-b p-4">
              <Link href="/href">
                <Image
                  src="/images/web-logo.png"
                  width={150}
                  height={40}
                  alt="desktop_logo"
                  className="h-15 w-auto"
                />
              </Link>
            </div>
            <MenuItems className="py-2" />
          </SheetContent>
        </Sheet>
        <Link href="/">
          <Image
            src="/images/web-logo.png"
            alt="Logo"
            width={450}
            height={100}
            className="h-6 md:h-10  w-20 md:width-auto"
          />
        </Link>
        <div className="flex flex-1 items-center justify-center max-w-xl px-4">
          <div className="relative w-full">
            <Input
              placeholder="Book Name/ Author / Publisher /Subject"
              className="w-full pr-10"
              type="text"
              value=""
              onChange={() => {}}
            />
            <Button
              size="icon"
              variant="ghost"
              className="absolute right-0 top-1/2 -translate-y-1/2"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <Link href="/checkout/cart">
          <div className="relative">
            <Button className="relative" variant="ghost">
              <ShoppingCart className="h-5 w-5 mr-5" />
            </Button>
            {user && (
              <span className="absolute top-2 left-3 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full px-1 text-xs">
                2
              </span>
            )}
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
