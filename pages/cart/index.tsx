import Cart from "@/#@/components/Share/Cart";
import { useCartStore } from "@/#@/hook/useCartStore";
import axiosClient from "@/#@/libraries/axiosClient";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";

const Index = (): JSX.Element | null => {
  const {
    items,
    total,
    itemCount,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
  } = useCartStore();
  // const navigate = useNavigate();

  return (
    <React.Fragment>
      <Cart />
    </React.Fragment>
  );
};

export default Index;
