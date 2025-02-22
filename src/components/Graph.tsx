"use client";

import { Bar, BarChart, XAxis, YAxis, Cell } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#2563eb",
    },
    mobile: {
        label: "Mobile",
        color: "#60a5fa",
    },
} satisfies ChartConfig;

const Graph = () => {
    const numberOfBars = 50; // Set the number of bars dynamically
    const numberOfXLabels = 13; // Total X-axis labels
    const numberOfYLabels = 4; // Total Y-axis labels

    // Generate chart data dynamically
    const chartData = Array.from({ length: numberOfBars }, (_, i) => ({
        name: `Item ${i + 1}`,
        value: Math.floor(Math.random() * 500), // Random values
        isGradient: i % 3 === 0, // Apply gradient every 3rd bar
    }));

    return (
        <section className="bg-slate-300 w-full p-6">
            <Label className="pl-8 mb-4 text-2xl font-bold">Carbon Credits</Label>
            <div className="flex justify-end">
                <Button className="bg-orange-400 px-8 text-black rounded-full">sdsds</Button>
            </div>
            
            <ChartContainer config={chartConfig} className="max-h-[250px] w-full pt-8">
                <BarChart accessibilityLayer data={chartData}>
                    {/* X-Axis with 13 evenly spaced labels */}
                    <XAxis
                        tickLine={false}
                        tickMargin={10}
                        tickFormatter={(value, index) =>
                            index % Math.ceil(numberOfBars / numberOfXLabels) === 0 ? value : ""
                        }
                    />

                    {/* Y-Axis with 4 labels */}
                    <YAxis tickCount={numberOfYLabels} axisLine={false} tickLine={false} />

                    {/* Bar Data with conditional gradient */}
                    <Bar dataKey="value" radius={4}>
                        {chartData.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={entry.isGradient ? "url(#verticalGradient)" : "#4f4522"}
                            />
                        ))}
                    </Bar>
                </BarChart>

                {/* Define the vertical gradient */}
                
            </ChartContainer>
            <svg width="0" height="0">
                    <defs>
                        <linearGradient id="verticalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#ca8a04" /> {/* yellow-600 */}
                            <stop offset="100%" stopColor="#713f12" /> {/* yellow-900 */}
                        </linearGradient>
                    </defs>
            </svg>

            <hr className="border-t border-gray-300 my-4"></hr>
        </section>
    );
};

export default Graph;
