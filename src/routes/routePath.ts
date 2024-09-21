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
  AdminWardInOut: "/admin/inout",
  AdminNotice: "/admin/notice",
  AdminNoticeWrite: "/admin/notice/write",

  AdminStaffManagement: "/admin/staff",

  Signin: "/sign-in",
  AdminSignin: "/sign-in/admin",
} as const;

export default RoutePath;
