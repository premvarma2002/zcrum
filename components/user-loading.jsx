"use client";

import { useUser } from "@clerk/nextjs";
import { BarLoader } from "react-spinners";

const UserLoading = () => {
  const { isLoaded } = useUser();

  if (!isLoaded) {
    return <BarLoader width="100%" color="#36d7b7" />;
  }

  return null;
};

export default UserLoading;
