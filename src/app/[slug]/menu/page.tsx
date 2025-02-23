
import { db } from "@/lib/prisma";
import { notFound } from "next/navigation";
import React from "react";
import RestaurantHeader from "./components/header";

interface RestaurantMenuPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ consumptionMethod: string }>;
}

const consumptionMethodIsValid = (consumptionMethod: string) => {
  return ["DINE_IN", "TAKEAWAY"].includes(consumptionMethod.toUpperCase());
};

const RestaurantMenuPage = async ({
  params,
  searchParams,
}: RestaurantMenuPageProps) => {
  const { slug } = await params;
  const { consumptionMethod } = await searchParams;
  const restaurant = await db.restaurant.findUnique({
    where: { slug },
  });
  if (!restaurant) {
    return notFound();
  }
  if (!consumptionMethodIsValid(consumptionMethod)) {
    return notFound();
  }
  return (
    <div>
      <div className="relative h-[250px] w-full">
        <RestaurantHeader restaurant={restaurant} />
      </div>
    </div>
  );
};

export default RestaurantMenuPage;
