"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const Pagination = ({ callbackUrl }: { callbackUrl: string }) => {
  const [page, setPage] = useState<number | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  useEffect(() => {
    router.push(`/${callbackUrl}?page=` + page);
  }, [page, router, callbackUrl]);

  return (
    <div className="flex justify-center">
      <Button
        className="mr-2"
        variant="outline"
        onClick={() => setPage(currentPage - 1)}
      >
        Previous
      </Button>
      <Button
        className="ml-2"
        variant="outline"
        onClick={() => setPage(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
