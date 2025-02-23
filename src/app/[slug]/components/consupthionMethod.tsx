import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ConsumptionMethod } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface consupthionMethodProps {
  slug: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  option: ConsumptionMethod;
}

const ConsupthionMethod = ({
  imageAlt,
  imageUrl,
  title,
  option,
  slug,
}: consupthionMethodProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-8 py-8">
        <Button
          variant={"secondary"}
          className="flex flex-col items-center rounded-full"
          asChild
        >
          <Link href={`${slug}/menu?consumptionMethod=${option}`}>
            <Image src={imageUrl} width={78} height={88} alt={imageAlt} />
            <span className="text-sm">{title}</span>
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ConsupthionMethod;
