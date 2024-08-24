import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Moon, Weight, Footprints, Flame, ChevronRight, Info } from "lucide-react";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis } from "recharts";

const glucoseData = [
  { time: "00:00", value: 180 },
  { time: "04:00", value: 220 },
  { time: "08:00", value: 280 },
  { time: "12:00", value: 160 },
  { time: "16:00", value: 220 },
  { time: "20:00", value: 240 },
];

const heartrateData = [
  { time: "00:00", value: 80 },
  { time: "06:00", value: 90 },
  { time: "12:00", value: 85 },
  { time: "18:00", value: 88 },
];

const oxygenData = [
  { time: "00:00", value: 99 },
  { time: "06:00", value: 99.5 },
  { time: "12:00", value: 99.2 },
  { time: "18:00", value: 99.8 },
];

export default function HealthDashboard() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard icon={<Moon className="h-4 w-4" />} title="Sleep" value="7h 33m" color="bg-blue-500" />
        <MetricCard icon={<Weight className="h-4 w-4" />} title="Weight" value="87 kg" />
        <MetricCard icon={<Footprints className="h-4 w-4" />} title="Steps" value="3,315" />
        <MetricCard icon={<Flame className="h-4 w-4" />} title="Burn" value="2,587 kcal" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Glucose</CardTitle>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Today: avg. 211 mg/dl</div>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={glucoseData}>
                <XAxis dataKey="time" hide />
                <YAxis hide domain={[100, 300]} />
                <Line type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Body info</CardTitle>
            <Info className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="pulmonology">
              <TabsList>
                <TabsTrigger value="pulmonology">Pulmonology</TabsTrigger>
                <TabsTrigger value="skeletal">Skeletal system</TabsTrigger>
                <TabsTrigger value="muscle">Muscle system</TabsTrigger>
                <TabsTrigger value="nervous">Nervous system</TabsTrigger>
              </TabsList>
              <TabsContent value="pulmonology" className="mt-4">
                <div className="relative h-64">
                  <div className="absolute inset-0 bg-blue-100 opacity-50"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="text-center">
                      <div className="text-sm font-medium">Oxygen level</div>
                      <div className="text-2xl font-bold">+1.2%</div>
                      <div className="text-sm font-medium mt-2">SpO2</div>
                      <div className="text-4xl font-bold">98%</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Heartrate</CardTitle>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Today: avg. 80 bpm</div>
            <ResponsiveContainer width="100%" height={100}>
              <LineChart data={heartrateData}>
                <Line type="monotone" dataKey="value" stroke="#ef4444" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Oxygen</CardTitle>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Today: avg. 99%</div>
            <ResponsiveContainer width="100%" height={100}>
              <LineChart data={oxygenData}>
                <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function MetricCard({ icon, title, value, color = "bg-blue-100" }) {
  return (
    <Card className={${color} text-white}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
}
