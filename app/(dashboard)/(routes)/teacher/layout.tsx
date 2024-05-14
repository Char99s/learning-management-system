import { isTeacher } from "@/lib/teacher";
import { redirect } from "next/navigation";

const TeacherLayout = async ({ children }: { children: React.ReactNode }) => {
  /*
  if (!isTeacher("c71e83a7-85c1-4957-b6c5-88dee255cbab")) {
    return redirect("/");
  }
  */
  return <>{children}</>;
};

export default TeacherLayout;
