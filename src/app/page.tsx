"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  BookOpen,
  Camera,
  CreditCard,
  Library,
  Search,
  ShoppingBag,
  Store,
  Tag,
  Truck,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NewBooks from "./components/NewBooks";

export default function Home() {
  const bannerImages = [
    "/images/book1.jpg",
    "/images/book2.jpg",
    "/images/book3.jpg",
  ];

  const blogPosts = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1604866830893-c13cafa515d5?w=800&auto=format&fit=crop&q=60",
      title: "Where and how to sell old books online?",
      description:
        "Get started with selling your used books online and earn money from your old books.",
      icon: <BookOpen className="w-6 h-6 text-primary" />,
    },
    {
      imageSrc:
        "https://media.istockphoto.com/id/910384920/photo/kid-reading-near-locked-door.webp",
      title: "What to do with old books?",
      description: "Learn about different ways to make use of your old books.",
      icon: <Library className="w-6 h-6 text-primary" />,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1492539438225-2666b2a98f93?w=800&auto=format&fit=crop&q=60",
      title: "What is BookKart?",
      description:
        "Discover how BookKart helps you buy and sell used books online.",
      icon: <Store className="w-6 h-6 text-primary" />,
    },
  ];

  const sellSteps = [
    {
      step: "Step 1",
      title: "Post an ad for selling used books",
      description: "Post an ad on BookKart describing your book details.",
      icon: <Camera className="h-8 w-8 text-primary" />,
    },
    {
      step: "Step 2",
      title: "Set the selling price",
      description: "Set the price at which you want to sell.",
      icon: <Tag className="h-8 w-8 text-primary" />,
    },
    {
      step: "Step 3",
      title: "Get paid",
      description: "Money will be credited to your bank account.",
      icon: <Wallet className="h-8 w-8 text-primary" />,
    },
  ];

  const buySteps = [
    {
      step: "Step 1",
      title: "Select books",
      description: "Search from thousands of used books.",
      icon: <Search className="h-8 w-8 text-primary" />,
    },
    {
      step: "Step 2",
      title: "Place order",
      description: "Place the order using Buy Now.",
      icon: <CreditCard className="h-8 w-8 text-primary" />,
    },
    {
      step: "Step 3",
      title: "Delivery",
      description: "Books delivered to your doorstep.",
      icon: <Truck className="h-8 w-8 text-primary" />,
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bannerImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [bannerImages.length]);

  return (
    <main className="min-h-screen">
      {/* Banner */}
      <section className="relative h-[600px] overflow-hidden">
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentImage === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Banner ${index}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Buy and Sell Old Books Online in India
          </h1>
          <div className="flex flex-col sm:flex-row gap-6">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
            >
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg group-hover:bg-white/30 transition-colors">
                  <ShoppingBag className="h-6 w-6" />
                </div>

                <Link href="/books">
                  <div className="text-left">
                    <div className="text-sm opacity-90">Start Shopping</div>
                    <div className="font-semibold">Buy Used Books</div>
                  </div>
                </Link>
              </div>
            </Button>
            <Button
              size="lg"
              className="group bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-black"
            >
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg group-hover:bg-black/30 transition-colors">
                  <ShoppingBag className="h-6 w-6" />
                </div>

                <Link href="/books">
                  <div className="text-left">
                    <div className="text-sm opacity-90">Start Selling</div>
                    <div className="font-semibold">Buy Old Books</div>
                  </div>
                </Link>
              </div>
            </Button>
          </div>
        </div>
      </section>
      <NewBooks />
      <Button
        size="lg"
        className="flex mt-10 mx-auto bg-yellow-500 px-8 py-6 rounded-xl"
      >
        <Link href="/books">
          <div className="text-sm opacity-90">Explore All Books Selling</div>
        </Link>
      </Button>
      {/* How to sell section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold mb-4">
              How to SELL your old books online on BookKart?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Saving some good amount of money by buying used books is just 3
              steps away from you :)
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 border-t-2 border-dashed border-gray-300"></div>

            {sellSteps.map((step, index) => (
              <div key={index} className="relative flex flex-col h-full">
                <div className="bg-white rounded-xl p-8 shadow-lg text-center grow flex flex-col">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full">
                    {step.step}
                  </div>

                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">{step.icon}</div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm grow">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to buy section */}
        <section className="py-16 bg-linear-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold mb-4">
              How to BUY second hand books online on Bookkart?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Saving some good amount of money by buying used books is just 3
              steps away from you :)
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 border-t-2 border-dashed border-gray-300"></div>

            {sellSteps.map((step, index) => (
              <div key={index} className="relative flex flex-col h-full">
                <div className="bg-yellow-400 rounded-xl p-8 shadow-lg text-center grow flex flex-col">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full">
                    {step.step}
                  </div>

                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">{step.icon}</div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm grow">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
