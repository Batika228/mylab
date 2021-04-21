import { DesktopOutlined,VideoCameraOutlined,CloudOutlined } from "@ant-design/icons"

export const Home_PATH = '/'
export const HISTORY_PATH = '/history'
export const NEWS_PATH = '/news'
export const ADD_CONTENT = '/add-content'
export const ABOUT_PATH = '/about-us'


export const MenuRoot = [

    {
        id: 0,
        name: "Home",
        icon: <DesktopOutlined/>,
        path: Home_PATH

    },

    {
        id: 1,
        name: "History",
        icon: <CloudOutlined/>,
        path: HISTORY_PATH

    },

    {
        id: 2,
        name: "News",
        icon: <VideoCameraOutlined/>,
        path: NEWS_PATH

    },
    {
        id: 3,
        name: "Add Content",
        icon: <CloudOutlined/>,
        path: ADD_CONTENT
    },

    {
        id: 4,
        name: "About us",
        icon: <CloudOutlined/>,
        path: ABOUT_PATH

    },

   /* {
        id: 2,
        name: "Teams",
        icon: <TeamOutlined/>,
        path: '/teams'

    }, */



]