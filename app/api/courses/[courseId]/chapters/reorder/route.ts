import { db } from "@/lib/db";
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function PUT(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const supabase = createClient();
    const { data, error } = await supabase.auth.getUser();
    const { list } = await req.json();
    const userId = data.user?.id;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const ownCourse = await db.course.findUnique({
      where: {
        id: params.courseId,
        userId: userId,
      },
    });

    if (!ownCourse) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    for (let item of list) {
      await db.chapter.update({
        where: { id: item.id },
        data: { position: item.position },
      });
    }

    return new NextResponse("Success", { status: 200 });
  } catch (error) {
    console.log("[REODER]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
