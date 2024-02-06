"use client";
import React from "react";
import { HomePageFilters } from "@/constants/filter";
import { Button } from "../ui/button";
const HomeFilter = () => {
  const active = "newest";
  return (
    <div className="mt-10 hidden gap-3 md:flex">
      {HomePageFilters.map((item) => (
        <Button
          className={`${
            active === item.value
              ? "bg-primary-100 text-primary-500 hover:bg-primary-100 dark:bg-dark-400 dark:text-primary-500 dark:hover:bg-dark-400"
              : "bg-light-800 text-light-500 hover:bg-light-800 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300"
          } body-medium rounded-lg px-6 py-3 capitalize shadow-none`}
          key={item.value}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilter;
