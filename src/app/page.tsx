import { 
  Shield, AlertTriangle, CheckCircle, TrendingUp, Users, FileText, BarChart3, Activity, Settings, Search 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const ModernGRCDashboard = () => {
  const riskMetrics = [
    {
      title: "Risk Score",
      value: "7.2",
      change: "↓ 0.5 from last month",
      icon: AlertTriangle,
      color: "text-amber-700",
      bgColor: "bg-amber-100 dark:bg-amber-950",
      borderColor: "border-amber-300 dark:border-amber-800"
    },
    {
      title: "Compliance Rate",
      value: "94%",
      change: "↑ 3% from last quarter",
      icon: Shield,
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-950",
      borderColor: "border-blue-300 dark:border-blue-800"
    },
    {
      title: "Audits Completed",
      value: "28",
      change: "↑ 12 this quarter",
      icon: CheckCircle,
      color: "text-green-700",
      bgColor: "bg-green-100 dark:bg-green-950",
      borderColor: "border-green-300 dark:border-green-800"
    },
    {
      title: "Action Items",
      value: "15",
      change: "5 overdue",
      icon: TrendingUp,
      color: "text-purple-700",
      bgColor: "bg-purple-100 dark:bg-purple-950",
      borderColor: "border-purple-300 dark:border-purple-800"
    }
  ];

  const recentActivity = [
    { type: "audit", message: "IT Security Assessment completed", time: "2 hours ago", status: "success" },
    { type: "risk", message: "New operational risk identified", time: "4 hours ago", status: "warning" },
    { type: "compliance", message: "SOX documentation updated", time: "1 day ago", status: "info" },
    { type: "governance", message: "Board committee meeting scheduled", time: "2 days ago", status: "info" }
  ];

  const quickActions = [
    { title: "Risk Assessment", description: "Create new risk evaluation", icon: Shield, variant: "default" as const },
    { title: "Audit Workflow", description: "Start audit process", icon: FileText, variant: "secondary" as const },
    { title: "Compliance Check", description: "Review compliance status", icon: CheckCircle, variant: "success" as const },
    { title: "Generate Report", description: "Create executive summary", icon: BarChart3, variant: "outline" as const }
  ];

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
                <p className="text-sm text-muted-foreground">Governance • Risk • Compliance</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search..."
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
              <Card key={i} className={`border ${metric.borderColor} shadow-lg hover:shadow-xl transition-shadow duration-300 ${metric.bgColor}`}>
                <CardHeader className="flex justify-between items-center pb-2">
                  <CardTitle className="text-sm font-semibold text-muted-foreground">{metric.title}</CardTitle>
                  <div className={`p-2 rounded-lg ${metric.bgColor} shadow-inner`}>
                    <IconComponent className={`h-6 w-6 ${metric.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <h2 className={`text-4xl font-extrabold mb-1 ${metric.color}`}>{metric.value}</h2>
                  <p className="text-sm text-muted-foreground">{metric.change}</p>
                </CardContent>
              </Card>
            );
          })}
        </section>

        {/* Main Dashboard Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Risk Matrix: Span all 3 columns */}
          <Card className="lg:col-span-3 shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[600px]">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-lg lg:text-xl">
                <BarChart3 className="w-7 h-7 text-primary" />
                <span className="font-semibold">Risk Assessment Matrix</span>
              </CardTitle>
              <CardDescription className="text-sm lg:text-base">Visual representation of current risk landscape</CardDescription>
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
                  <div className="flex items-center text-red-700 font-semibold">High Probability</div>
                  <div className="aspect-square bg-amber-200 dark:bg-amber-900/40 border-2 border-amber-400 rounded-lg flex items-center justify-center text-amber-700">3</div>
                  <div className="aspect-square bg-red-200 dark:bg-red-900/40 border-2 border-red-400 rounded-lg flex items-center justify-center text-red-700">7</div>
                  <div className="aspect-square bg-red-300 dark:bg-red-900/60 border-2 border-red-500 rounded-lg flex items-center justify-center text-red-800">5</div>

                  <div className="flex items-center text-amber-700 font-semibold">Medium Probability</div>
                  <div className="aspect-square bg-green-200 dark:bg-green-900/40 border-2 border-green-400 rounded-lg flex items-center justify-center text-green-700">8</div>
                  <div className="aspect-square bg-amber-200 dark:bg-amber-900/40 border-2 border-amber-400 rounded-lg flex items-center justify-center text-amber-700">12</div>
                  <div className="aspect-square bg-red-200 dark:bg-red-900/40 border-2 border-red-400 rounded-lg flex items-center justify-center text-red-700">6</div>

                  <div className="flex items-center text-green-700 font-semibold">Low Probability</div>
                  <div className="aspect-square bg-green-300 dark:bg-green-900/60 border-2 border-green-500 rounded-lg flex items-center justify-center text-green-800">15</div>
                  <div className="aspect-square bg-green-200 dark:bg-green-900/40 border-2 border-green-400 rounded-lg flex items-center justify-center text-green-700">9</div>
                  <div className="aspect-square bg-amber-200 dark:bg-amber-900/40 border-2 border-amber-400 rounded-lg flex items-center justify-center text-amber-700">4</div>
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
              <CardDescription>Latest governance and compliance events</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 max-h-[360px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent">
              {recentActivity.map((activity, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-3 p-4 rounded-lg bg-muted/30 border border-border/50"
                >
                  <div
                    className={`mt-1 rounded-full w-3 h-3 ${
                      activity.status === "success"
                        ? "bg-green-500"
                        : activity.status === "warning"
                        ? "bg-amber-500"
                        : "bg-blue-500"
                    }`}
                  />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">{activity.message}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4 hover:bg-primary/10 transition">
                View All Activity
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Quick Actions */}
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="font-semibold">Quick Actions</CardTitle>
            <CardDescription>Streamlined access to core GRC functions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {quickActions.map((action, i) => {
                const IconComponent = action.icon;
                return (
                  <Button
                    key={i}
                    variant={action.variant}
                    size="xl"
                    className="h-24 flex flex-col items-center justify-center space-y-2 font-semibold transition hover:scale-[1.03]"
                  >
                    <IconComponent className="w-7 h-7" />
                    <div className="text-center text-sm opacity-90">{action.description}</div>
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ModernGRCDashboard;
