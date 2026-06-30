import * as React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  UtensilsCrossed, 
  CalendarCheck, 
  ShoppingBag, 
  Settings, 
  LogOut,
  TrendingUp,
  Users,
  DollarSign,
  Plus,
  Edit2,
  Trash2,
  CheckCircle,
  Clock,
  Menu as MenuIcon,
  X
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Badge } from '../components/ui/badge';
import { MOCK_MENU } from '../data/menu';
import { cn } from '../lib/utils';
import { Link, Routes, Route, useNavigate, useLocation } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarLinks = [
    { name: 'Dashboard', path: '/admin', icon: <LayoutDashboard size={20} /> },
    { name: 'Menu Items', path: '/admin/menu', icon: <UtensilsCrossed size={20} /> },
    { name: 'Reservations', path: '/admin/reservations', icon: <CalendarCheck size={20} /> },
    { name: 'Orders', path: '/admin/orders', icon: <ShoppingBag size={20} /> },
    { name: 'Settings', path: '/admin/settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="flex min-h-screen bg-muted/30">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r hidden lg:flex flex-col sticky top-0 h-screen">
        <div className="p-6 flex items-center gap-3 border-b">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-serif font-bold">BV</div>
          <span className="font-serif font-bold text-xl">Admin Panel</span>
        </div>
        <nav className="flex-grow p-4 space-y-2">
          {sidebarLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                location.pathname === link.path 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {link.icon}
              <span className="font-medium">{link.name}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t">
          <Button variant="ghost" className="w-full justify-start gap-3 text-destructive hover:text-destructive hover:bg-destructive/10" onClick={() => navigate('/')}>
            <LogOut size={20} />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6 md:p-10">
        <div className="max-w-7xl mx-auto space-y-8">
          <Routes>
            <Route index element={<AdminDashboard />} />
            <Route path="menu" element={<AdminMenu />} />
            <Route path="reservations" element={<AdminReservations />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="*" element={<div className="text-center py-20 text-muted-foreground">Section coming soon...</div>} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Revenue', value: '$12,845', icon: <DollarSign />, trend: '+12.5%', color: 'text-green-500' },
    { label: 'Active Orders', value: '24', icon: <ShoppingBag />, trend: '+4', color: 'text-blue-500' },
    { label: 'Reservations', value: '18', icon: <CalendarCheck />, trend: '-2', color: 'text-amber-500' },
    { label: 'New Customers', value: '142', icon: <Users />, trend: '+18%', color: 'text-purple-500' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Welcome back, Admin!</h1>
        <p className="text-muted-foreground">Here's what's happening at Bella Vista today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.label}</CardTitle>
              <div className={cn("p-2 bg-muted rounded-lg", stat.color)}>{stat.icon}</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className={stat.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}>{stat.trend}</span> from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { id: '#8452', customer: 'Alice Johnson', status: 'Preparing', amount: '$54.20' },
                  { id: '#8451', customer: 'Bob Smith', status: 'Delivered', amount: '$128.50' },
                  { id: '#8450', customer: 'Charlie Brown', status: 'Pending', amount: '$32.00' },
                  { id: '#8449', customer: 'Diana Prince', status: 'Delivered', amount: '$86.15' },
                ].map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>
                      <Badge variant={order.status === 'Delivered' ? 'default' : 'secondary'}>{order.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right font-bold">{order.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Popular Dishes This Week</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {MOCK_MENU.slice(0, 4).map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-sm">{item.name}</h4>
                  <div className="w-full bg-muted h-2 rounded-full mt-1">
                    <div className="bg-primary h-full rounded-full" style={{ width: `${Math.random() * 60 + 40}%` }} />
                  </div>
                </div>
                <span className="font-bold text-sm">{Math.floor(Math.random() * 50 + 10)} sold</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const AdminMenu = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Menu Management</h1>
          <p className="text-muted-foreground">Add, edit or remove items from your digital menu.</p>
        </div>
        <Button className="gap-2 rounded-full">
          <Plus size={18} /> Add New Item
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Dish</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MOCK_MENU.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <img src={item.image} className="w-10 h-10 rounded-lg object-cover" />
                      <span className="font-medium">{item.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell className="font-bold">${item.price.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-green-500 border-green-500/20 bg-green-500/5">Active</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8"><Edit2 size={16} /></Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive"><Trash2 size={16} /></Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

const AdminReservations = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Reservations</h1>
        <p className="text-muted-foreground">Manage upcoming table bookings and guest requests.</p>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Guest</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Guests</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { name: 'John Doe', email: 'john@example.com', date: '2023-11-24', time: '19:00', guests: 4, status: 'Confirmed' },
                { name: 'Sarah Miller', email: 'sarah@example.com', date: '2023-11-24', time: '20:30', guests: 2, status: 'Pending' },
                { name: 'Michael Ross', email: 'mike@example.com', date: '2023-11-25', time: '18:30', guests: 6, status: 'Confirmed' },
                { name: 'Emma Wilson', email: 'emma@example.com', date: '2023-11-25', time: '19:45', guests: 3, status: 'Cancelled' },
              ].map((res, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <div className="font-medium">{res.name}</div>
                    <div className="text-xs text-muted-foreground">{res.email}</div>
                  </TableCell>
                  <TableCell>
                    <div>{res.date}</div>
                    <div className="text-xs text-muted-foreground">{res.time}</div>
                  </TableCell>
                  <TableCell>{res.guests} Persons</TableCell>
                  <TableCell>
                    <Badge variant={res.status === 'Confirmed' ? 'default' : res.status === 'Pending' ? 'secondary' : 'destructive'}>
                      {res.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-green-500"><CheckCircle size={16} /></Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive"><X size={16} /></Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

const AdminOrders = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Online Orders</h1>
        <p className="text-muted-foreground">Track and manage delivery and pickup orders.</p>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { id: '#8452', customer: 'Alice Johnson', type: 'Delivery', total: '$54.20', status: 'Preparing' },
                { id: '#8451', customer: 'Bob Smith', type: 'Pickup', total: '$128.50', status: 'Ready' },
                { id: '#8450', customer: 'Charlie Brown', type: 'Delivery', total: '$32.00', status: 'Pending' },
              ].map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {order.type === 'Delivery' ? <Truck size={14} className="text-primary" /> : <Store size={14} className="text-primary" />}
                      {order.type}
                    </div>
                  </TableCell>
                  <TableCell className="font-bold">{order.total}</TableCell>
                  <TableCell>
                    <Badge variant={order.status === 'Ready' ? 'default' : 'secondary'}>{order.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">Update Status</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

const Truck = ({ size, className }: { size: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const Store = ({ size, className }: { size: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

export default Admin;
