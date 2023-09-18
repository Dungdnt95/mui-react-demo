import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";

export const MENU = [
  {
    title: "Data",
    path: "",
    icon: false,
  },
  {
    title: "Manage Team",
    path: "/team",
    icon: <PeopleOutlinedIcon />,
  },
  {
    title: "Contacts Information",
    path: "/contacts",
    icon: <ContactsOutlinedIcon />,
  },
  {
    title: "Invoices Balances",
    path: "/invoices",
    icon: <ReceiptOutlinedIcon />,
  },
  {
    title: "Pages",
    path: "",
    icon: false,
  },
  {
    title: "Profile Form",
    path: "/form",
    icon: <PersonOutlinedIcon />,
  },
  {
    title: "Calendar",
    path: "/calendar",
    icon: <CalendarTodayOutlinedIcon />,
  },
  {
    title: "FAQ Page",
    path: "/faq",
    icon: <HelpOutlineOutlinedIcon />,
  },
  {
    title: "Charts",
    path: "",
    icon: false,
  },
  {
    title: "Bar Chart",
    path: "/bar",
    icon: <BarChartOutlinedIcon />,
  },
  {
    title: "Pie Chart",
    path: "/pie",
    icon: <PieChartOutlineOutlinedIcon />,
  },
  {
    title: "Line Chart",
    path: "/line",
    icon: <TimelineOutlinedIcon />,
  },
  {
    title: "Geography Chart",
    path: "/geography",
    icon: <MapOutlinedIcon />,
  },
];
