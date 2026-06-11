import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { FileText, Send, CheckCircle, DollarSign, TrendingUp, Clock } from 'lucide-react';
// Recharts components removed to prevent timeout issues

const submissionTrendsData = [
  { name: 'Jan', submissions: 45, offers: 38, funded: 32 },
  { name: 'Feb', submissions: 52, offers: 44, funded: 38 },
  { name: 'Mar', submissions: 48, offers: 40, funded: 35 },
  { name: 'Apr', submissions: 61, offers: 51, funded: 42 },
  { name: 'May', submissions: 55, offers: 47, funded: 39 },
  { name: 'Jun', submissions: 67, offers: 56, funded: 48 },
  { name: 'Jul', submissions: 72, offers: 61, funded: 52 },
  { name: 'Aug', submissions: 64, offers: 55, funded: 46 },
  { name: 'Sep', submissions: 78, offers: 66, funded: 57 },
  { name: 'Oct', submissions: 74, offers: 63, funded: 54 },
  { name: 'Nov', submissions: 85, offers: 72, funded: 62 },
  { name: 'Dec', submissions: 91, offers: 78, funded: 67 },
];

const fundingPerformanceData = [
  { name: 'Jan', amount: 1200000, rate: 71, deals: 9 },
  { name: 'Feb', amount: 1580000, rate: 73, deals: 11 },
  { name: 'Mar', amount: 1350000, rate: 69, deals: 10 },
  { name: 'Apr', amount: 1890000, rate: 75, deals: 13 },
  { name: 'May', amount: 1650000, rate: 72, deals: 12 },
  { name: 'Jun', amount: 2100000, rate: 78, deals: 15 },
  { name: 'Jul', amount: 2250000, rate: 76, deals: 16 },
  { name: 'Aug', amount: 1950000, rate: 74, deals: 14 },
  { name: 'Sep', amount: 2400000, rate: 79, deals: 17 },
  { name: 'Oct', amount: 2300000, rate: 77, deals: 16 },
  { name: 'Nov', amount: 2650000, rate: 81, deals: 19 },
  { name: 'Dec', amount: 2900000, rate: 83, deals: 21 },
];

// Catmull-Rom → cubic bezier for smooth chart curves
function smoothPath(pts: { x: number; y: number }[]) {
  if (pts.length < 2) return '';
  let d = `M ${pts[0].x},${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[Math.min(pts.length - 1, i + 2)];
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${c1x},${c1y} ${c2x},${c2y} ${p2.x},${p2.y}`;
  }
  return d;
}

const formatM = (n: number) => `$${(n / 1000000).toFixed(1)}M`;

export function OverviewPage() {
  const [subHover, setSubHover] = useState<number | null>(null);
  const [perfHover, setPerfHover] = useState<number | null>(null);

  const subMax = 100;
  const totalSubmissions = submissionTrendsData.reduce((s, d) => s + d.submissions, 0);
  const totalFundedDeals = submissionTrendsData.reduce((s, d) => s + d.funded, 0);
  const avgConversion = Math.round((totalFundedDeals / totalSubmissions) * 100);
  const toPts = (key: 'submissions' | 'offers' | 'funded') =>
    submissionTrendsData.map((d, i) => ({
      x: (i / (submissionTrendsData.length - 1)) * 100,
      y: 100 - (d[key] / subMax) * 100,
    }));
  const subPts = toPts('submissions');
  const offerPts = toPts('offers');
  const fundedPts = toPts('funded');

  const perfMax = 3000000;
  const totalPerfAmount = fundingPerformanceData.reduce((s, d) => s + d.amount, 0);
  const peakPerf = fundingPerformanceData.reduce((best, d) => (d.amount > best.amount ? d : best), fundingPerformanceData[0]);
  const perfPts = fundingPerformanceData.map((d, i) => ({
    x: (i / (fundingPerformanceData.length - 1)) * 100,
    y: 100 - (d.amount / perfMax) * 100,
  }));
  const ratePts = fundingPerformanceData.map((d, i) => ({
    x: (i / (fundingPerformanceData.length - 1)) * 100,
    y: 100 - ((d.rate - 60) / 30) * 100,
  }));
  const perfLine = smoothPath(perfPts);
  const perfArea = `${perfLine} L 100,100 L 0,100 Z`;
  const rateLine = smoothPath(ratePts);

  return (
    <div className="space-y-6">
      {/* Quick Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-orange/10 rounded-lg flex items-center justify-center">
                <FileText className="h-5 w-5 text-lendeck-orange" />
              </div>
              <div>
                <div className="text-xl">12</div>
                <div className="text-sm text-muted-foreground">New Files Pending</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-primary/10 rounded-lg flex items-center justify-center">
                <Send className="h-5 w-5 text-lendeck-primary" />
              </div>
              <div>
                <div className="text-xl">28</div>
                <div className="text-sm text-muted-foreground">Deal Submissions</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-pink/10 rounded-lg flex items-center justify-center">
                <Clock className="h-5 w-5 text-lendeck-pink" />
              </div>
              <div>
                <div className="text-xl">15</div>
                <div className="text-sm text-muted-foreground">Pending Offers</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-success/10 rounded-lg flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-lendeck-success" />
              </div>
              <div>
                <div className="text-xl">8</div>
                <div className="text-sm text-muted-foreground">Funded Deals</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Submission Trends */}
        <Card>
          <CardHeader className="flex flex-row items-start justify-between space-y-0">
            <div>
              <CardTitle>Submission Trends</CardTitle>
              <CardDescription>Submissions, offers and funded deals — last 12 months</CardDescription>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{totalSubmissions.toLocaleString()}</div>
              <div className="flex items-center justify-end gap-1 text-xs text-[#25A900]">
                <TrendingUp className="h-3 w-3" />
                +28% vs last year
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Legend */}
            <div className="flex items-center mb-4" style={{ gap: 20 }}>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4E0F60]"></span>
                <span className="text-xs text-muted-foreground">Submissions</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F0C]"></span>
                <span className="text-xs text-muted-foreground">Offers received</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#25A900]"></span>
                <span className="text-xs text-muted-foreground">Funded</span>
              </div>
            </div>

            <div className="flex gap-3">
              {/* Y axis */}
              <div className="flex flex-col justify-between text-[10px] text-muted-foreground text-right w-7 shrink-0" style={{ height: '14rem', paddingBottom: 20 }}>
                <span>100</span>
                <span>75</span>
                <span>50</span>
                <span>25</span>
                <span>0</span>
              </div>

              {/* Plot area */}
              <div className="relative flex-1" onMouseLeave={() => setSubHover(null)}>
                {/* Gridlines */}
                <div className="absolute left-0 right-0 top-0 flex flex-col justify-between pointer-events-none" style={{ bottom: 20 }}>
                  {[0, 1, 2, 3, 4].map((g) => (
                    <div key={g} className="w-full" style={{ borderTop: '1px dashed #E5E7EB', height: 0 }}></div>
                  ))}
                </div>

                <div className="relative" style={{ height: '14rem', paddingBottom: 20 }}>
                  <div className="relative h-full">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d={smoothPath(subPts)} fill="none" stroke="#4E0F60" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                      <path d={smoothPath(offerPts)} fill="none" stroke="#FF5F0C" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                      <path d={smoothPath(fundedPts)} fill="none" stroke="#25A900" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                      {subHover !== null && (
                        <line
                          x1={subPts[subHover].x} y1="0" x2={subPts[subHover].x} y2="100"
                          stroke="#4E0F60" strokeWidth="1" strokeDasharray="3 3" vectorEffect="non-scaling-stroke" opacity="0.4"
                        />
                      )}
                    </svg>

                    {/* Hover dots */}
                    {subHover !== null && (
                      <>
                        <span className="absolute w-2.5 h-2.5 rounded-full bg-[#4E0F60] border-2" style={{ borderColor: '#fff', left: `${subPts[subHover].x}%`, top: `${subPts[subHover].y}%`, transform: 'translate(-50%, -50%)' }}></span>
                        <span className="absolute w-2.5 h-2.5 rounded-full bg-[#FF5F0C] border-2" style={{ borderColor: '#fff', left: `${offerPts[subHover].x}%`, top: `${offerPts[subHover].y}%`, transform: 'translate(-50%, -50%)' }}></span>
                        <span className="absolute w-2.5 h-2.5 rounded-full bg-[#25A900] border-2" style={{ borderColor: '#fff', left: `${fundedPts[subHover].x}%`, top: `${fundedPts[subHover].y}%`, transform: 'translate(-50%, -50%)' }}></span>
                      </>
                    )}

                    {/* Hover zones */}
                    <div className="absolute inset-0 flex">
                      {submissionTrendsData.map((item, index) => (
                        <div key={item.name} className="flex-1" onMouseEnter={() => setSubHover(index)}></div>
                      ))}
                    </div>
                  </div>

                  {/* X labels */}
                  <div className="absolute left-0 right-0 flex" style={{ bottom: 0 }}>
                    {submissionTrendsData.map((item) => (
                      <span key={item.name} className="flex-1 text-center text-[10px] text-muted-foreground whitespace-nowrap">{item.name}</span>
                    ))}
                  </div>
                </div>

                {/* Tooltip */}
                {subHover !== null && (
                  <div
                    className="absolute top-0 pointer-events-none"
                    style={{
                      left: `${subPts[subHover].x}%`,
                      transform: subHover < 2 ? 'translateX(0)' : subHover > submissionTrendsData.length - 3 ? 'translateX(-100%)' : 'translateX(-50%)',
                    }}
                  >
                    <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs whitespace-nowrap">
                      <div className="font-semibold mb-1">{submissionTrendsData[subHover].name}</div>
                      <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#4E0F60]"></span>Submissions: <span className="font-medium">{submissionTrendsData[subHover].submissions}</span></div>
                      <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#FF5F0C]"></span>Offers: <span className="font-medium">{submissionTrendsData[subHover].offers}</span></div>
                      <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#25A900]"></span>Funded: <span className="font-medium">{submissionTrendsData[subHover].funded}</span></div>
                      <div className="border-t border-gray-200 mt-1 pt-1 text-muted-foreground">
                        Conversion {Math.round((submissionTrendsData[subHover].funded / submissionTrendsData[subHover].submissions) * 100)}%
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Footer stats */}
            <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-gray-200">
              <div>
                <div className="text-[10px] text-muted-foreground">Avg conversion</div>
                <div className="text-sm font-semibold">{avgConversion}%</div>
              </div>
              <div>
                <div className="text-[10px] text-muted-foreground">Total funded</div>
                <div className="text-sm font-semibold">{totalFundedDeals} deals</div>
              </div>
              <div>
                <div className="text-[10px] text-muted-foreground">Best month</div>
                <div className="text-sm font-semibold">Dec • 91 subs</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Funding Performance */}
        <Card>
          <CardHeader className="flex flex-row items-start justify-between space-y-0">
            <div>
              <CardTitle>Funding Performance</CardTitle>
              <CardDescription>Funded volume and approval rate — last 12 months</CardDescription>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{formatM(totalPerfAmount)}</div>
              <div className="flex items-center justify-end gap-1 text-xs text-[#25A900]">
                <TrendingUp className="h-3 w-3" />
                +35% vs last year
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Legend */}
            <div className="flex items-center mb-4" style={{ gap: 20 }}>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F0C]"></span>
                <span className="text-xs text-muted-foreground">Funded amount</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-4" style={{ borderTop: '2px dashed #4E0F60', height: 0 }}></span>
                <span className="text-xs text-muted-foreground">Approval rate</span>
              </div>
            </div>

            <div className="flex gap-3">
              {/* Left Y axis ($) */}
              <div className="flex flex-col justify-between text-[10px] text-muted-foreground text-right w-9 shrink-0" style={{ height: '14rem', paddingBottom: 20 }}>
                <span>$3M</span>
                <span>$2.25M</span>
                <span>$1.5M</span>
                <span>$0.75M</span>
                <span>$0</span>
              </div>

              {/* Plot area */}
              <div className="relative flex-1" onMouseLeave={() => setPerfHover(null)}>
                {/* Gridlines */}
                <div className="absolute left-0 right-0 top-0 flex flex-col justify-between pointer-events-none" style={{ bottom: 20 }}>
                  {[0, 1, 2, 3, 4].map((g) => (
                    <div key={g} className="w-full" style={{ borderTop: '1px dashed #E5E7EB', height: 0 }}></div>
                  ))}
                </div>

                <div className="relative" style={{ height: '14rem', paddingBottom: 20 }}>
                  <div className="relative h-full">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="brokerPerfGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#FF5F0C" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#FF5F0C" stopOpacity="0.02" />
                        </linearGradient>
                      </defs>
                      <path d={perfArea} fill="url(#brokerPerfGradient)" />
                      <path d={perfLine} fill="none" stroke="#FF5F0C" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                      <path d={rateLine} fill="none" stroke="#4E0F60" strokeWidth="1.5" strokeDasharray="4 3" vectorEffect="non-scaling-stroke" />
                      {perfHover !== null && (
                        <line
                          x1={perfPts[perfHover].x} y1="0" x2={perfPts[perfHover].x} y2="100"
                          stroke="#FF5F0C" strokeWidth="1" strokeDasharray="3 3" vectorEffect="non-scaling-stroke" opacity="0.4"
                        />
                      )}
                    </svg>

                    {/* Data dots */}
                    {fundingPerformanceData.map((item, index) => (
                      <span
                        key={item.name}
                        className="absolute w-2 h-2 rounded-full bg-[#FF5F0C] border-2 transition-transform"
                        style={{
                          left: `${perfPts[index].x}%`,
                          top: `${perfPts[index].y}%`,
                          borderColor: '#fff',
                          transform: `translate(-50%, -50%)${perfHover === index ? ' scale(1.5)' : ''}`,
                        }}
                      ></span>
                    ))}
                    {perfHover !== null && (
                      <span className="absolute w-2.5 h-2.5 rounded-full bg-[#4E0F60] border-2" style={{ borderColor: '#fff', left: `${ratePts[perfHover].x}%`, top: `${ratePts[perfHover].y}%`, transform: 'translate(-50%, -50%)' }}></span>
                    )}

                    {/* Hover zones */}
                    <div className="absolute inset-0 flex">
                      {fundingPerformanceData.map((item, index) => (
                        <div key={item.name} className="flex-1" onMouseEnter={() => setPerfHover(index)}></div>
                      ))}
                    </div>
                  </div>

                  {/* X labels */}
                  <div className="absolute left-0 right-0 flex" style={{ bottom: 0 }}>
                    {fundingPerformanceData.map((item) => (
                      <span key={item.name} className="flex-1 text-center text-[10px] text-muted-foreground whitespace-nowrap">{item.name}</span>
                    ))}
                  </div>
                </div>

                {/* Tooltip */}
                {perfHover !== null && (
                  <div
                    className="absolute top-0 pointer-events-none"
                    style={{
                      left: `${perfPts[perfHover].x}%`,
                      transform: perfHover < 2 ? 'translateX(0)' : perfHover > fundingPerformanceData.length - 3 ? 'translateX(-100%)' : 'translateX(-50%)',
                    }}
                  >
                    <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs whitespace-nowrap">
                      <div className="font-semibold mb-1">{fundingPerformanceData[perfHover].name}</div>
                      <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#FF5F0C]"></span>Funded: <span className="font-medium">{formatM(fundingPerformanceData[perfHover].amount)}</span></div>
                      <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#4E0F60]"></span>Approval rate: <span className="font-medium">{fundingPerformanceData[perfHover].rate}%</span></div>
                      <div className="border-t border-gray-200 mt-1 pt-1 text-muted-foreground">
                        {fundingPerformanceData[perfHover].deals} deals • avg {formatM(fundingPerformanceData[perfHover].amount / fundingPerformanceData[perfHover].deals)}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Y axis (%) */}
              <div className="flex flex-col justify-between text-[10px] text-muted-foreground w-7 shrink-0" style={{ height: '14rem', paddingBottom: 20 }}>
                <span>90%</span>
                <span>82%</span>
                <span>75%</span>
                <span>68%</span>
                <span>60%</span>
              </div>
            </div>

            {/* Footer stats */}
            <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-gray-200">
              <div>
                <div className="text-[10px] text-muted-foreground">Total funded</div>
                <div className="text-sm font-semibold">{formatM(totalPerfAmount)}</div>
              </div>
              <div>
                <div className="text-[10px] text-muted-foreground">Peak month</div>
                <div className="text-sm font-semibold">{peakPerf.name} • {formatM(peakPerf.amount)}</div>
              </div>
              <div>
                <div className="text-[10px] text-muted-foreground">Avg approval rate</div>
                <div className="text-sm font-semibold">{Math.round(fundingPerformanceData.reduce((s, d) => s + d.rate, 0) / fundingPerformanceData.length)}%</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest updates on your deals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { company: 'Tech Solutions Inc', status: 'Offer Received', amount: '$150,000', time: '2 hours ago', type: 'offer' },
              { company: 'Green Energy Co', status: 'Documents Submitted', amount: '$200,000', time: '4 hours ago', type: 'submitted' },
              { company: 'Retail Plus LLC', status: 'Funded', amount: '$75,000', time: '1 day ago', type: 'funded' },
              { company: 'Manufacturing Corp', status: 'Under Review', amount: '$300,000', time: '2 days ago', type: 'review' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-[#F9F8FD]">
                <div className="flex items-center gap-3">
                  {activity.type === 'offer' && <CheckCircle className="h-4 w-4 text-[#25A900]" />}
                  {activity.type === 'submitted' && <Send className="h-4 w-4 text-[#4E0F60]" />}
                  {activity.type === 'funded' && <DollarSign className="h-4 w-4 text-[#25A900]" />}
                  {activity.type === 'review' && <Clock className="h-4 w-4 text-[#FF5F0C]" />}
                  <div>
                    <p className="font-medium">{activity.company}</p>
                    <p className="text-sm text-muted-foreground">{activity.status}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{activity.amount}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Success Rate Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-[#25A900]" />
            Success Rate Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center p-4 bg-[#F9F8FD] rounded-lg">
              <div className="text-2xl font-bold text-[#25A900]">68%</div>
              <p className="text-sm text-muted-foreground">Overall Success Rate</p>
            </div>
            <div className="text-center p-4 bg-[#F9F8FD] rounded-lg">
              <div className="text-2xl font-bold text-[#4E0F60]">85%</div>
              <p className="text-sm text-muted-foreground">Document Completion</p>
            </div>
            <div className="text-center p-4 bg-[#F9F8FD] rounded-lg">
              <div className="text-2xl font-bold text-[#ED1E59]">7.2</div>
              <p className="text-sm text-muted-foreground">Avg Days to Fund</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}