"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

function FeaturesCard() {
  return (
    <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700 rounded-lg">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">Exclusive Features</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="mt-4 space-y-2">
          <li className="text-gray-700 dark:text-gray-300 flex items-center">
            <Check className="inline-block h-5 w-5 text-sand-500 dark:text-sand-400 mr-2" />
            Early Access to New Features
          </li>
          <li className="text-gray-700 dark:text-gray-300 flex items-center">
            <Check className="inline-block h-5 w-5 text-sand-500 dark:text-sand-400 mr-2" />
            Exclusive Content and Updates
          </li>
          <li className="text-gray-700 dark:text-gray-300 flex items-center">
            <Check className="inline-block h-5 w-5 text-sand-500 dark:text-sand-400 mr-2" />
            Personalized Support
          </li>
          <li className="text-gray-700 dark:text-gray-300 flex items-center">
            <Check className="inline-block h-5 w-5 text-sand-500 dark:text-sand-400 mr-2" />
            Invitations to Special Events
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}

export default FeaturesCard;
