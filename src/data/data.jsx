
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import RadarIcon from '@mui/icons-material/Radar';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import AvatarImage1 from "../assets/images/avatar1.jpg"; 
import AvatarImage2 from "../assets/images/avatar2.jpg"; 
import AvatarImage3 from "../assets/images/avatar3.jpg"; 
import AvatarImage4 from "../assets/images/avatar4.jpg"; 
import AvatarImage5 from "../assets/images/avatar5.jpg"; 

import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import SouthEastOutlinedIcon from '@mui/icons-material/SouthEastOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';

import PopularImage1 from "../assets/images/popular1.jpg"; 
import PopularImage2 from "../assets/images/popular2.jpg"; 
import PopularImage3 from "../assets/images/popular3.jpg"; 



export const sideMenuItem = [
    {
        title: "Menu",
    },
    {
        icon: <DashboardOutlinedIcon className='icon'/>,
        text: "Home",
        path: "/",
    },
    {
        icon: <PersonOutlineOutlinedIcon className='icon'/>,
        text: "Users",
        path: "/users",
    },
    {
        icon: <PieChartOutlineIcon className='icon'/>,
        text: "Charts",
        path: "/charts",
    },
    {
        title: "Charts",
    },
    {
        icon: <BarChartIcon className='icon'/>,
        text: "Bar Chart",
        path: "/barchart",
    },
    {
        icon: <DonutLargeIcon className='icon'/>,
        text: "Donut Chart",
        path: "/donutchart",
    },
    {
        icon: <StackedLineChartIcon className='icon'/>,
        text: "Line Chart",
        path: "/linechart",
    },
    {
        icon: <RadarIcon className='icon'/>,
        text: "Radar Chart",
        path: "/radarchart",
    },
    {
        title: "Settings",
    },  
    {
        icon: <SettingsOutlinedIcon className='icon'/>,
        text: "Settings",
        path: "/setting",
    },
    {
        icon: <AccountCircleOutlinedIcon className='icon'/>,
        text: "Profile",
        path: "/profile",
    },
    {
        icon: <LogoutOutlinedIcon className='icon'/>,
        text: "Logout",
        path: "/logout",
    },
]

export const notificationItem = [
    {
        image: AvatarImage1,
        name: "John Doe",
        desc: "Wants to know your location",
        time: "50 minutes ago"
    },
    {
        image: AvatarImage2,
        name: "John Doe",
        desc: "Wants to know your location",
        time: "50 minutes ago"
    },
    {
        image: AvatarImage3,
        name: "John Doe",
        desc: "Wants to know your location",
        time: "50 minutes ago"
    },
    {
        image: AvatarImage4,
        name: "John Doe",
        desc: "Wants to know your location",
        time: "50 minutes ago"
    },
    {
        image: AvatarImage5,
        name: "John Doe",
        desc: "Wants to know your location",
        time: "50 minutes ago"
    },
]
export const userInfos = [
    {
        icon: <AccountCircleOutlinedIcon className='icon'/>,
        text: "Profile",
        path: "/profile"
    },
    {
        icon: <SettingsOutlinedIcon className='icon'/>,
        text: "Setting",
        path: "/setting"
    },
    {
        icon: <LogoutOutlinedIcon className='icon'/>,
        text: "Logout",
        path: "/logout"
    },
]

export const widgetContent = [
    {
        title: "TOTAL EARNINGS",
        addedIcon: <ArrowOutwardOutlinedIcon className='icon'/>,
        added: "+16.24 %",
        amount: "562.24",
        link: "View net earnings", 
        icon: <MonetizationOnOutlinedIcon className='icon'/>
    },
    {
        title: "ORDERS",
        minusIcon: <SouthEastOutlinedIcon className='icon'/>,
        minus: "-3.57 %",
        amount: "64,894",
        link: "View all orders", 
        icon: <ShoppingBagOutlinedIcon className='icon'/>
    },
    {
        title: "CUSTOMERS",
        addedIcon: <ArrowOutwardOutlinedIcon className='icon'/>,
        added: "+36.18 %",
        amount: "552.54",
        link: "See details", 
        icon: <AccountCircleOutlinedIcon className='icon'/>
    },
    {
        title: "MY BALANCE",
        minusIcon: <SouthEastOutlinedIcon className='icon'/>,
        minus: "-10.00%",
        amount: "515.24",
        link: "Withdraw money", 
        icon: <AccountBalanceWalletOutlinedIcon className='icon'/>
    },
]

export const revenueContent = [
    {
        amount: "4,562",
        text: "Orders"
    },
    {
        amount: "$22.89k",
        text: "Earnings"
    },
    {
        amount: "367",
        text: "Refunds"
    },
    {
        amount: "20.25%",
        text: "Conversation"
    },
]

export const userDetails = [
    {
        title: "Email",
        desc: "johndeo@gmail.com"
    },
    {
        title: "Phone",
        desc: "01234567890"
    },
    {
        title: "Address",
        desc: "Elton St. 354 Garder YD. New York"
    },
    {
        title: "Country",
        desc: "USA"
    },
]

export const portfolios = [
    {
        text: 'facebook', 
        icon: <FacebookOutlinedIcon className='icon'/>,
        placeholder: "https://www.facebook.com",
        value: "https://www.facebook.com"
    },
    {
        text: 'twitter', 
        icon: <TwitterIcon className='icon'/>,
        placeholder: "https://www.twitter.com",
        value: "https://www.twitter.com"
    },
    {
        text: 'linkedin', 
        icon: <LinkedInIcon className='icon'/>,
        placeholder: "https://www.linkedin.com",
        value: "https://www.linkedin.com"
    },
    {
        text: 'pinterest', 
        icon: <PinterestIcon className='icon'/>,
        placeholder: "https://www.pinterest.com",
        value: "https://www.pinterest.com"
    },
]

export const socials = [
    {
        text: 'facebook-bordered', 
        icon: <FacebookOutlinedIcon className='icon'/>,
        path: "https://www.facebook.com"
    },
    {
        text: 'twitter-bordered', 
        icon: <TwitterIcon className='icon'/>,
        path: "https://www.twitter.com"
    },
    {
        text: 'linkedin-bordered', 
        icon: <LinkedInIcon className='icon'/>,
        path: "https://www.linkedin.com"
    },
    {
        text: 'pinterest-bordered', 
        icon: <PinterestIcon className='icon'/>,
        path: "https://www.pinterest.com"
    },
]

export const popularPosts = [
    {
        image: PopularImage1, 
        title: "Develop your apps in your own way",
        date: "21 Jan 2024"
    },
    {
        image: PopularImage2, 
        title: "Develop your apps in your own way",
        date: "21 Jan 2024"
    },
    {
        image: PopularImage3, 
        title: "Develop your apps in your own way",
        date: "21 Jan 2024"
    },
]

