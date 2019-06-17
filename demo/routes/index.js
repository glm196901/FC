import Home from '../view/home/home'
import InfoCenter from '../view/infoCenter/infoCenter';
import Introduce from '../view/introduce/introduce';
import MarketCenter from '../view/marketCenter/marketCneter'
import Download from '../view/download/download';
import Connection from '../view/connection/connection'


// 子页面
// 公司介绍
import Dynamics from '../view/introduce/dynamics'
import Advantages from '../view/introduce/advantages'
import Brief from '../view/introduce/brief'

// 行情中心
import Domestic from '../view/marketCenter/domestic'
import International from '../view/marketCenter/international'
import StockIndex from '../view/marketCenter/stockindex'

//资讯中心
import MarketInfo from '../view/infoCenter/marketInfo'
import EveryWeek from '../view/infoCenter/everyWeek'
import DailyNews from '../view/infoCenter/dailyNews'


// 将组件变量名字设置好对应的path路径,exact表示精确匹配.
export default [
    {
        path: '/',
        exact: true,
        component: Home 
    },
    {
        path: '/Download',
        component: Download 
    },
    {
        path: '/introduce',
        component: Introduce,    
        routes: [
            {
                path: '/introduce/dynamics',
                component: Dynamics
            },
            {
                path: '/introduce/advantages',
                component: Advantages,
            },
            {
                path: '/introduce/brief',
                component: Brief
            }
        ]

    },
    {
        path: '/marketcenter',
        component: MarketCenter,
        routes: [
            {
                path: '/marketcenter/stockindex',
                component: StockIndex,
            },
            {
                path: '/marketcenter/domestic',
                component: Domestic,
            },
            {
                path: '/marketcenter/international',
                component: International
            }
        ]

    },
    {
        path: '/infocenter',
        component: InfoCenter,
        routes: [
            {
                path: '/infocenter/marketinfo',
                component: MarketInfo,
            },
            {
                path: '/infocenter/dailynews',
                component: DailyNews,
            },
            {
                path: '/infocenter/everyweek',
                component: EveryWeek
            }
        ]

    },
]