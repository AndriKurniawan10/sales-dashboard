import SalesChart from "@/components/charts/SalesChart";

export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-2">Sales Dashboard</h1>
      <p className="text-gray-600 mb-6">Sales data visualization</p>

      {/* Wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-1 md:col-span-2">
          <SalesChart />
        </div>
      </div>
    </div>
  );
}
