const RoutePath = {
  Home: "/",
  StaffHomePage: "/staff",
  Requests: "/request",
  CompletedRequests: "/completed",
  PatientManagement: "/management",
  Diet: "/diet",
  Notice: "/notice",
  Settings: "/settings",
  AdminWardManagement: "/staff",
  AdminWardInOut: "/staff/inout",
  AdminNotice: "/staff/notice",
  AdminNoticeWrite: "/staff/notice/write",

  // AdminStaffManagement: "/admin/staff",

  Signin: "/sign-in",
  AdminSignin: "/sign-in/admin",
} as const;

export default RoutePath;
