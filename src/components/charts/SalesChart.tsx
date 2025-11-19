"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { salesData } from "@/data/sales";

const COLORS = ["#3b82f6", "#06b6d4", "#10b981"];

export default function SalesChart() {
  const [chartType, setChartType] = useState<"bar" | "line" | "pie">("bar");
  const [minSales, setMinSales] = useState(0);

  const filteredData = salesData.filter((item) => item.sales >= minSales);

  return (
    <div className="bg-white rounded-xl shadow p-4 w-full h-[450px]">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Sales Overview (2022–2024)</h2>

        {/* Chart Switch Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => setChartType("bar")}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Bar
          </button>

          <button
            onClick={() => setChartType("line")}
            className="px-3 py-1 bg-teal-500 text-white rounded hover:bg-teal-600"
          >
            Line
          </button>

          <button
            onClick={() => setChartType("pie")}
            className="px-3 py-1 bg-emerald-500 text-white rounded hover:bg-emerald-600"
          >
            Pie
          </button>
        </div>
      </div>

      {/* FILTER INPUT */}
      <div className="mb-4 flex items-center gap-3">
        <label className="text-gray-700 font-medium">Min Sales:</label>
        <input
          type="number"
          value={minSales}
          onChange={(e) => setMinSales(Number(e.target.value))}
          className="border p-2 w-32 rounded outline-none focus:ring focus:ring-blue-300"
          placeholder="0"
        />
      </div>

      {/* CHART */}
      <ResponsiveContainer width="100%" height={330}>
        {chartType === "bar" && (
          <BarChart data={filteredData}>
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#3b82f6" />
          </BarChart>
        )}

        {chartType === "line" && (
          <LineChart data={filteredData}>
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Line dataKey="sales" stroke="#06b6d4" strokeWidth={3} />
          </LineChart>
        )}

        {chartType === "pie" && (
          <PieChart>
            <Pie
              data={filteredData}
              dataKey="sales"
              nameKey="year"
              cx="50%"
              cy="50%"
              outerRadius={120}
            >
              {filteredData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
