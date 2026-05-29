import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const bankrollData = [
  { date: "Jan", value: 12400 },
  { date: "Feb", value: 11800 },
  { date: "Mar", value: 14200 },
  { date: "Apr", value: 13600 },
  { date: "May", value: 16900 },
  { date: "Jun", value: 15400 },
  { date: "Jul", value: 18700 },
  { date: "Aug", value: 21200 },
  { date: "Sep", value: 19800 },
  { date: "Oct", value: 23400 },
  { date: "Nov", value: 22100 },
  { date: "Dec", value: 27600 },
];

const sessionData = [
  { day: "Mon", profit: 420 },
  { day: "Tue", profit: -180 },
  { day: "Wed", profit: 760 },
  { day: "Thu", profit: 310 },
  { day: "Fri", profit: -90 },
  { day: "Sat", profit: 1240 },
  { day: "Sun", profit: 580 },
];

const recentSessions = [
  { venue: "Aria Resort", stakes: "$5/$10 NLH", hours: 6.5, result: 1840 },
  { venue: "Bellagio", stakes: "$2/$5 NLH", hours: 4.0, result: -320 },
  { venue: "MGM Grand", stakes: "$5/$10 NLH", hours: 8.0, result: 2210 },
  { venue: "Wynn", stakes: "$10/$20 NLH", hours: 3.5, result: -850 },
];

export function DashboardMockup() {
  return (
    <div
      style={{ fontFamily: "Inter, sans-serif" }}
      className="w-full bg-white border border-border rounded-xl overflow-hidden shadow-2xl"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-white">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
        </div>
        <span
          className="text-muted-foreground"
          style={{ fontSize: "11px", letterSpacing: "0.04em" }}
        >
          stackedge.app/dashboard
        </span>
        <div className="w-16" />
      </div>

      <div className="flex" style={{ minHeight: "460px" }}>
        {/* Sidebar */}
        <div className="w-44 border-r border-border bg-[#fafafa] flex flex-col py-4 gap-1 px-3 shrink-0">
          <div className="flex items-center gap-2 px-2 py-2 mb-3">
            <div className="w-6 h-6 rounded bg-foreground flex items-center justify-center">
              <span className="text-white" style={{ fontSize: "10px", fontWeight: 700 }}>
                G
              </span>
            </div>
            <span style={{ fontSize: "12px", fontWeight: 600 }}>GrindSafe</span>
          </div>
          {["Dashboard", "Sessions", "Bankroll", "Analytics", "Staking", "Settings"].map(
            (item, i) => (
              <div
                key={item}
                className={`px-2 py-1.5 rounded-md cursor-pointer ${
                  i === 0
                    ? "bg-foreground text-white"
                    : "text-muted-foreground hover:bg-muted"
                }`}
                style={{ fontSize: "11px", fontWeight: i === 0 ? 500 : 400 }}
              >
                {item}
              </div>
            )
          )}
        </div>

        {/* Main content */}
        <div className="flex-1 p-5 bg-[#fafafa] overflow-hidden">
          {/* Stat cards */}
          <div className="grid grid-cols-4 gap-3 mb-5">
            {[
              { label: "Total Bankroll", value: "$27,600", delta: "+18.4%", positive: true },
              { label: "Win Rate", value: "14.2bb/hr", delta: "+2.1 this month", positive: true },
              { label: "Total Hours", value: "342 hrs", delta: "+38 this month", positive: true },
              { label: "ROI", value: "31.8%", delta: "-2.3% vs last mo", positive: false },
            ].map((stat) => (
              <div key={stat.label} className="bg-white border border-border rounded-lg p-3">
                <p className="text-muted-foreground mb-1" style={{ fontSize: "10px" }}>
                  {stat.label}
                </p>
                <p style={{ fontSize: "15px", fontWeight: 600 }}>{stat.value}</p>
                <p
                  style={{ fontSize: "9px" }}
                  className={stat.positive ? "text-[#16a34a]" : "text-[#ef4444]"}
                >
                  {stat.delta}
                </p>
              </div>
            ))}
          </div>

          {/* Charts row */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {/* Bankroll chart */}
            <div className="col-span-2 bg-white border border-border rounded-lg p-3">
              <p style={{ fontSize: "11px", fontWeight: 500 }} className="mb-3">
                Bankroll Growth
              </p>
              <ResponsiveContainer width="100%" height={130}>
                <AreaChart data={bankrollData}>
                  <defs>
                    <linearGradient id="bankrollGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0a0a0a" stopOpacity={0.12} />
                      <stop offset="95%" stopColor="#0a0a0a" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="date"
                    tick={{ fontSize: 8, fill: "#71717a" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{
                      fontSize: 10,
                      border: "1px solid #e4e4e7",
                      borderRadius: 6,
                      padding: "4px 8px",
                    }}
                    formatter={(v: number) => [`$${v.toLocaleString()}`, "Bankroll"]}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#0a0a0a"
                    strokeWidth={1.5}
                    fill="url(#bankrollGrad)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Session bar chart */}
            <div className="bg-white border border-border rounded-lg p-3">
              <p style={{ fontSize: "11px", fontWeight: 500 }} className="mb-3">
                This Week
              </p>
              <ResponsiveContainer width="100%" height={130}>
                <BarChart data={sessionData} barSize={10}>
                  <XAxis
                    dataKey="day"
                    tick={{ fontSize: 8, fill: "#71717a" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{
                      fontSize: 10,
                      border: "1px solid #e4e4e7",
                      borderRadius: 6,
                      padding: "4px 8px",
                    }}
                    formatter={(v: number) => [`$${v}`, "P&L"]}
                  />
                  <Bar
                    dataKey="profit"
                    radius={[3, 3, 0, 0]}
                    fill="#0a0a0a"
                    // negative bars shown lighter
                    label={false}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent sessions table */}
          <div className="bg-white border border-border rounded-lg overflow-hidden">
            <div className="flex items-center justify-between px-3 py-2 border-b border-border">
              <p style={{ fontSize: "11px", fontWeight: 500 }}>Recent Sessions</p>
              <span
                className="text-muted-foreground underline cursor-pointer"
                style={{ fontSize: "10px" }}
              >
                View all
              </span>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  {["Venue", "Stakes", "Hours", "Result"].map((h) => (
                    <th
                      key={h}
                      className="text-left text-muted-foreground px-3 py-1.5"
                      style={{ fontSize: "9px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentSessions.map((s, i) => (
                  <tr key={i} className="border-b border-border last:border-0">
                    <td className="px-3 py-2" style={{ fontSize: "10px", fontWeight: 500 }}>
                      {s.venue}
                    </td>
                    <td className="px-3 py-2 text-muted-foreground" style={{ fontSize: "10px" }}>
                      {s.stakes}
                    </td>
                    <td className="px-3 py-2 text-muted-foreground" style={{ fontSize: "10px" }}>
                      {s.hours}h
                    </td>
                    <td
                      className="px-3 py-2"
                      style={{
                        fontSize: "10px",
                        fontWeight: 500,
                        color: s.result >= 0 ? "#16a34a" : "#ef4444",
                        fontFamily: "JetBrains Mono, monospace",
                      }}
                    >
                      {s.result >= 0 ? "+" : ""}${s.result.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
