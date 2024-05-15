import { db } from "@/lib/db";
import { Categories } from "./_components/categories";
import { SearchInput } from "@/components/search-input";
import { getCourses } from "@/actions/get-courses";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { CoursesList } from "@/components/courses-list";
import { Suspense } from "react";

interface SearchPageProps {
  searchParams: {
    title: string;
    categoryId: string;
  };
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  const userId = data.user?.id;

  if (!userId) {
    return redirect("/");
  }

  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  const courses = await getCourses({
    userId,
    ...searchParams,
  });
  return (
    <>
      <Suspense>
        <div className="px-6 pt-6 md:hidden md:mb-0 block">
          <SearchInput />
        </div>
        <div className="p-6 space-y-4">
          <Categories items={categories} />

          <CoursesList items={courses} />
        </div>
      </Suspense>
    </>
  );
};

export default SearchPage;
