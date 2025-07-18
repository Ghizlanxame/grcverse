import React, { useState, useEffect } from "react";
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Users,
  FileText,
  BarChart3,
  Activity,
  Settings,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const ModernGRCDashboard = () => {
  // State for dynamic risk score (simulate live data)
  const [riskScore, setRiskScore] = useState(7.2);

  // Search input state
  const [searchQuery, setSearchQuery] = useState("");

  // Recent activity data
  const recentActivity = [
    {
      type: "audit",
      message: "IT Security Assessment completed",
      time: "2 hours ago",
      status: "success",
    },
    {
      type: "risk",
      message: "New operational risk identified",
      time: "4 hours ago",
      status: "warning",
    },
    {
      type: "compliance",
      message: "SOX documentation updated",
      time: "1 day ago",
      status: "info",
    },
    {
      type: "governance",
      message: "Board committee meeting scheduled",
      time: "2 days ago",
      status: "info",
    },
  ];

  // Quick actions buttons
  const quickActions = [
    {
      title: "Risk Assessment",
      description: "Create new risk evaluation",
      icon: Shield,
      variant: "default" as const,
    },
    {
      title: "Audit Workflow",
      description: "Start audit process",
      icon: FileText,
      variant: "secondary" as const,
    },
    {
      title: "Compliance Check",
      description: "Review compliance status",
      icon: CheckCircle,
      variant: "success" as const,
    },
    {
      title: "Generate Report",
      description: "Create executive summary",
      icon: BarChart3,
      variant: "outline" as const,
    },
  ];

  // Risk metrics state, with riskScore dynamic
  const [riskMetrics, setRiskMetrics] = useState([
    {
      title: "Risk Score",
      value: riskScore.toFixed(1),
      change: "↓ 0.5 from last month",
      icon: AlertTriangle,
      color: "text-amber-700",
      bgColor: "bg-amber-100 dark:bg-amber-950",
      borderColor: "border-amber-300 dark:border-amber-800",
    },
    {
      title: "Compliance Rate",
      value: "94%",
      change: "↑ 3% from last quarter",
      icon: Shield,
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-950",
      borderColor: "border-blue-300 dark:border-blue-800",
    },
    {
      title: "Audits Completed",
      value: "28",
      change: "↑ 12 this quarter",
      icon: CheckCircle,
      color: "text-green-700",
      bgColor: "bg-green-100 dark:bg-green-950",
      borderColor: "border-green-300 dark:border-green-800",
    },
    {
      title: "Action Items",
      value: "15",
      change: "5 overdue",
      icon: TrendingUp,
      color: "text-purple-700",
      bgColor: "bg-purple-100 dark:bg-purple-950",
      borderColor: "border-purple-300 dark:border-purple-800",
    },
  ]);

  // Update riskScore every 10 seconds (simulate live data)
  useEffect(() => {
    const interval = setInterval(() => {
      setRiskScore((prev) => {
        let next = prev + (Math.random() * 0.2 - 0.1); // vary by ±0.1
        if (next < 0) next = 0;
        if (next > 10) next = 10;
        return parseFloat(next.toFixed(1));
      });
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Update riskMetrics when riskScore changes
  useEffect(() => {
    setRiskMetrics((metrics) =>
      metrics.map((m) =>
        m.title === "Risk Score" ? { ...m, value: riskScore.toFixed(1) } : m
      )
    );
  }, [riskScore]);

  // Filter recent activities by search query
  const filteredActivity = recentActivity.filter((activity) =>
    activity.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle Quick Action button clicks
  const handleQuickAction = (title: string) => {
    alert(`Clicked on "${title}"`);
  };

  return (
    <div className="min-h-screen bg-background text-slate-900 dark:text-slate-100">
      {/* Header */}
      <header className="border-b border-border bg-card/70 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-md">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-extrabold tracking-tight">GRC.ai</h1>
                <p className="text-sm text-muted-foreground">
                  Governance • Risk • Compliance
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search activities..."
                value={searchQuery}
                onChange={(e) => {
 		 setSearchQuery(e.target.value);
 		 console.log("Search query:", e.target.value);
		}}
                className="pl-12 w-72 bg-background/60 backdrop-blur-sm border border-border rounded-md"
              />
            </div>
            <Button variant="modern" size="sm" className="hover:bg-primary/20 transition">
              <Settings className="w-5 h-5" />
            </Button>
            <Button variant="gradient" size="sm" className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Team Portal</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-8 space-y-10">
        {/* Key Metrics */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {riskMetrics.map((metric, i) => {
            const IconComponent = metric.icon;
            return (
              <Card
                key={i}
                className={`border ${metric.borderColor} shadow-lg hover:shadow-xl transition-shadow duration-300 ${metric.bgColor}`}
              >
                <CardHeader className="flex justify-between items-center pb-2">
                  <CardTitle className="text-sm font-semibold text-muted-foreground">
                    {metric.title}
                  </CardTitle>
                  <div className={`p-2 rounded-lg ${metric.bgColor} shadow-inner`}>
                    <IconComponent className={`h-6 w-6 ${metric.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <h2 className={`text-4xl font-extrabold mb-1 ${metric.color}`}>
                    {metric.value}
                  </h2>
                  <p className="text-sm text-muted-foreground">{metric.change}</p>
                </CardContent>
              </Card>
            );
          })}
        </section>

        {/* Main Dashboard Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Risk Matrix: Span all 3 columns */}
          <Card className="lg:col-span-3 shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[500px]">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-lg lg:text-xl">
                <BarChart3 className="w-7 h-7 text-primary" />
                <span className="font-semibold">Risk Assessment Matrix</span>
              </CardTitle>
              <CardDescription className="text-sm lg:text-base">
                Visual representation of current risk landscape
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-4 gap-3 text-center text-base font-semibold">
                  <div></div>
                  <div className="text-green-700">Low Impact</div>
                  <div className="text-amber-700">Medium Impact</div>
                  <div className="text-red-700">High Impact</div>
                </div>

                <div className="grid grid-cols-4 gap-3 text-lg font-bold">
                  <div className="flex items-center text-red-700 font-semibold">
                    High Probability
                  </div>
                  <div className="aspect-square bg-amber-200 dark:bg-amber-900/40 border-2 border-amber-400 rounded-lg flex items-center justify-center text-amber-700">
                    3
                  </div>
                  <div className="aspect-square bg-red-200 dark:bg-red-900/40 border-2 border-red-400 rounded-lg flex items-center justify-center text-red-700">
                    7
                  </div>
                  <div className="aspect-square bg-red-300 dark:bg-red-900/60 border-2 border-red-500 rounded-lg flex items-center justify-center text-red-800">
                    5
                  </div>

                  <div className="flex items-center text-amber-700 font-semibold">
                    Medium Probability
                  </div>
                  <div className="aspect-square bg-green-200 dark:bg-green-900/40 border-2 border-green-400 rounded-lg flex items-center justify-center text-green-700">
                    8
                  </div>
                  <div className="aspect-square bg-amber-200 dark:bg-amber-900/40 border-2 border-amber-400 rounded-lg flex items-center justify-center text-amber-700">
                    12
                  </div>
                  <div className="aspect-square bg-red-200 dark:bg-red-900/40 border-2 border-red-400 rounded-lg flex items-center justify-center text-red-700">
                    6
                  </div>

                  <div className="flex items-center text-green-700 font-semibold">
                    Low Probability
                  </div>
                  <div className="aspect-square bg-green-300 dark:bg-green-900/60 border-2 border-green-500 rounded-lg flex items-center justify-center text-green-800">
                    15
                  </div>
                  <div className="aspect-square bg-green-200 dark:bg-green-900/40 border-2 border-green-400 rounded-lg flex items-center justify-center text-green-700">
                    9
                  </div>
                  <div className="aspect-square bg-amber-200 dark:bg-amber-900/40 border-2 border-amber-400 rounded-lg flex items-center justify-center text-amber-700">
                    4
                  </div>
                </div>

                <div className="flex justify-center space-x-10 text-base">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span>Low Risk (1-3)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
                    <span>Medium Risk (4-6)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <span>High Risk (7-9)</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="w-6 h-6 text-primary" />
                <span className="font-semibold">Recent Activity</span>
              </CardTitle>
              <CardDescription>
                Latest governance and compliance events
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 max-h-[360px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent">
              {filteredActivity.length === 0 && (
                <p className="text-muted-foreground text-center">No activity found.</p>
              )}
              {filteredActivity.map((activity, index) => {
                let bg, text, border;
                if (activity.status === "success") {
                  bg = "bg-green-100 dark:bg-green-950";
                  text = "text-green-700 dark:text-green-400";
                  border = "border-green-300 dark:border-green-700";
                } else if (activity.status === "warning") {
                  bg = "bg-amber-100 dark:bg-amber-950";
                  text = "text-amber-700 dark:text-amber-400";
                  border = "border-amber-300 dark:border-amber-700";
                } else {
                  bg = "bg-blue-100 dark:bg-blue-950";
                  text = "text-blue-700 dark:text-blue-400";
                  border = "border-blue-300 dark:border-blue-700";
                }
                return (
                  <div
                    key={index}
                    className={`${bg} border-l-4 ${border} rounded p-3 cursor-default select-none`}
                  >
                    <p className={`font-semibold ${text}`}>{activity.message}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="w-6 h-6 text-primary" />
                <span className="font-semibold">Quick Actions</span>
              </CardTitle>
              <CardDescription>Get started with key tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {quickActions.map((action, idx) => {
                  const Icon = action.icon;
                  return (
                    <Button
                      key={idx}
                      variant={action.variant}
                      size="lg"
                      className="w-full flex items-center space-x-4"
                      onClick={() => handleQuickAction(action.title)}
                    >
                      <Icon className="w-6 h-6" />
                      <div className="text-left">
                        <div className="font-semibold">{action.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {action.description}
                        </div>
                      </div>
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default ModernGRCDashboard;
