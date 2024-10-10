const RoutePath = {
  Home: "/",
  StaffHomePage: "/staff",
  Requests: "/request",
  CompletedRequests: "/completed",
  PatientManagement: "/management",
  Diet: "/diet",
  Notice: "/notice",
  Settings: "/settings",
  AdminWardManagement: "/admin",
  AdminWardInOut: "/admin/staff/inout",
  AdminNotice: "/admin/staff/notice",

  // AdminStaffManagement: "/admin/staff",

  Signin: "/sign-in",
  AdminSignin: "/sign-in/admin",
} as const;

export default RoutePath;
