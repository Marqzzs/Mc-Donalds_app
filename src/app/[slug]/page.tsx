import { db } from "@/lib/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

interface RestaurantPageProps {
  params: Promise<{ slug: string }>;
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = await params;
  const restaurant = await db.restaurant.findUnique({
    where: {
      slug,
    },
  });
  if (!restaurant) {
    return notFound();
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 pt-24">
      {/* LOGO E TITULO */}
      <div className="flex flex-col items-center gap-2">
        <Image 
          src={restaurant?.avatarImageUrl}
          width={82}
          height={82}
          alt={restaurant?.name}
        />
        <h2 className="font-semibold">
          {restaurant?.name}
        </h2>
      </div>
      {/* BEM VINDO */}
      <div className="space-y-2 pt-24 text-center">

      </div>
      {/* MENU */}

    </div>
  );
};

export default RestaurantPage;
