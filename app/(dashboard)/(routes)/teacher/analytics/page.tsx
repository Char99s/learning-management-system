import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

import { getAnalytics } from "@/actions/get-analytics";
import { DataCard } from "./_components/data-card";
import { Chart } from "./_components/chart";

const AnalysticsPage = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  const userId = data.user?.id;

  if (!userId) return redirect("/");

  const {
    data: analyticsData,
    totalRevenue,
    totalSales,
  } = await getAnalytics(userId);

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <DataCard label="Total Revenue" value={totalRevenue} shouldFormat />
        <DataCard label="Total Sales" value={totalSales} />
      </div>
      <Chart data={analyticsData} />
    </div>
  );
};

export default AnalysticsPage;
