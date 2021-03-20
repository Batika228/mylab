import { DesktopOutlined,VideoCameraOutlined,CloudOutlined } from "@ant-design/icons"

export const Home_PATH = '/'
export const HISTORY_PATH = '/history'
export const NEWS_PATH = '/news'


export const MenuRoot = [

    {
        id: 1,
        name: "Home",
        icon: <DesktopOutlined/>,
        path: Home_PATH

    },

    {
        id: 2,
        name: "History",
        icon: <CloudOutlined/>,
        path: HISTORY_PATH

    },

    {
        id: 3,
        name: "News",
        icon: <VideoCameraOutlined/>,
        path: NEWS_PATH

    },

   /* {
        id: 2,
        name: "Teams",
        icon: <TeamOutlined/>,
        path: '/teams'

    }, */



]