const RoutePath = {
  //main
  Home: "/",
  StaffHomePage: "/staff",
  Requests: "/request",
  CompletedRequests: "/completed",
  PatientManagement: "/management",
  Diet: "/diet",
  Notice: "/notice",
  Settings: "/settings",

  //staff
  StaffWardManagement: "/staff",
  StaffWardInOut: "/staff/inout",
  StaffNotice: "/staff/notice",
  StaffNoticeWrite: "/staff/noticeWrite",

  //admin
  AdminWardManagement: "/staff/admin",

  Signin: "/sign-in",
  StaffSignin: "/sign-in/staff",
} as const;

export default RoutePath;
