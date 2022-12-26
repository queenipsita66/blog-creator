import { BookmarkAddOutlined, Check, Done, Notifications, TrendingDown, TrendingUp } from "@mui/icons-material"
import { Box, Card, Chip, Container, Grid, SvgIcon, Typography, useTheme } from "@mui/material"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getFormattedDate } from "../../utils/utils"
import CButton from "../atoms/CButton"
import CCopyright from "../atoms/CCopyright"
import CAreaChart from "../atoms/charts/CAreaChart"
import CBarChart from "../atoms/charts/CBarChart"
import CClickableCard from "../molecules/CClickableCard"
import CDashboardCards from "../molecules/CDashboardCards"
import GlobalHeaderLayout from "./GlobalHeaderLayout"
import { todosAdded, todosToggled } from "../../store/features/todos/todos"

const DashboardPage = (props: any) => {
    const areChartDaylabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const areaChartWeekData = {
        labels: areChartDaylabels,
        datasets: [
            {
                fill: true,
                label: 'Page Views',
                data: [20, 39, 13, 8, 30, 41, 9],
                borderColor: 'rgb(43, 41, 171)',
                backgroundColor: 'rgb(99, 97, 242, 0.3)',
                lineTension: 0.3,
                radius: 4
            },
            {
                fill: true,
                label: 'Sessions',
                data: [30, 19, 9, 25, 50, 20, 60],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.3)',
                lineTension: 0.3,
                radius: 4
            },
        ],
    }
    const areaChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom' as const,
                labels: {
                    boxWidth: 15,
                }
            },
            tooltip: {
                mode: "index"
            }
        },
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: true,
                    drawTicks: false
                },
                border: {
                    display: false
                },
                ticks: {
                    padding: 15
                }
            },
            x: {
                grid: {
                    display: false
                },
                border: {
                    display: false
                }
            }
        },
    }

    const areaChartMonthlabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const areaChartMonthData = {
        labels: areaChartMonthlabels,
        datasets: [
            {
                fill: true,
                label: 'Page Views',
                data: [50, 79, 25, 18, 32, 64, 42, 11, 34, 85, 56, 77],
                borderColor: 'rgb(43, 41, 171)',
                backgroundColor: 'rgb(99, 97, 242, 0.3)',
                lineTension: 0.3,
                radius: 4
            },
            {
                fill: true,
                label: 'Sessions',
                data: [20, 49, 36, 66, 76, 43, 56, 28, 45, 68, 32, 81],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.3)',
                lineTension: 0.3,
                radius: 4
            },
        ],
    }

    const barChartData = {
        labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        datasets: [{
            label: 'This week statistics',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: 'rgba(64, 206, 219)',
            borderColor: 'rgba(64, 206, 219)',
            borderWidth: 1,
            borderRadius: 4,
            barThickness: 25
        }]
    }

    const barChartOptions = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                display: false
            },
            x: {
                grid: {
                    display: false
                },
                border: {
                    display: false
                }
            }
        },
    }

    const [areaChartData, setAreaChartData] = useState(areaChartWeekData);
    const [monthViewSelected, setMonthViewSelected] = useState(false);

    const toggleAreaChartView = (view: string) => {
        if (view == "month") {
            setAreaChartData(areaChartMonthData);
            setMonthViewSelected(true);
        } else {
            setAreaChartData(areaChartWeekData);
            setMonthViewSelected(false);
        }
    }

    const todos = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();

    const addTodo = () => {
        dispatch(todosAdded({
            id: 1,
            text: 'first todo'
        }))
    }

    return (
        <GlobalHeaderLayout>
            <Box sx={{ width: "100%", padding: "1rem" }}>
                <Grid container spacing={2}>
                    {props.dashboardData[0]?.dashboardAnalyticsCollection?.items.map((data: any, index: number) => {
                        return (
                            <Grid item key={index} xs={12} sm={6} lg={3} md={3}>
                                <CDashboardCards
                                    contentHeader={data.title}
                                    numberCount={data.totalNumberCount}
                                    analyticsPercentage={data.analyticsPercentage}
                                    displayIcon={data.analyticsUp ? <TrendingUp fontSize="inherit" /> : <TrendingDown fontSize="inherit" />}
                                    chipBgColor={data.analyticsUp ? "#3883eb" : "#eb9834"}
                                    chipTextColor={"#fff"}
                                    contentNote1={data.contentNote1}
                                    extraNumber={data.extraCountMade}
                                    contentNote2={data.contentNote2}
                                />
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
            <Box sx={{ width: "100%", padding: "1rem" }}>
                <Grid container spacing={2}>
                    <Grid item lg={8} md={7} sm={12} xs={12}>
                        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                            <Typography variant="h6" fontSize={16}>
                                Unique Visitor
                            </Typography>
                            <Box>
                                <CButton buttonLabel="Month" color={!monthViewSelected ? "secondary" : "primary"} variant={monthViewSelected ? "outlined" : "text"} size="small" onClick={() => toggleAreaChartView("month")} />
                                <CButton buttonLabel="Week" color={monthViewSelected ? "secondary" : "primary"} variant={!monthViewSelected ? "outlined" : "text"} size="small" onClick={() => toggleAreaChartView("week")} />
                            </Box>
                        </Box>
                        <Card variant="outlined" sx={{ padding: "1rem", borderRadius: "10px" }}>
                            <CAreaChart data={areaChartData} options={areaChartOptions} height={400} />
                        </Card>
                    </Grid>
                    <Grid item lg={4} md={5} sm={12} xs={12}>
                        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", mb: 1.5 }}>
                            <Typography variant="h6" fontSize={16}>
                                Blogs Creation Overview
                            </Typography>
                        </Box>
                        <Card variant="outlined" sx={{ padding: "1rem", borderRadius: "10px" }}>
                            <CBarChart data={barChartData} options={barChartOptions} height={400} />
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ width: "100%", padding: "1rem" }}>
                <Grid container spacing={2}>
                    <Grid item lg={8} md={7} sm={12} xs={12}>
                        <Typography variant="h6" fontSize={16} pb={2}>
                            Recent Blogs
                        </Typography>
                        <Box sx={{ height: "500px", overflowY: "auto" }}>
                            {props.dashboardData[0]?.recentBlogsCollection?.items?.map((post: any, idx: number) => {
                                return (
                                    <Box key={idx} mb={2}>
                                        <CClickableCard
                                            title={post.title}
                                            subtitle={post.createdBy}
                                            description={post.description}
                                            tag={post.tag}
                                            readTime={post.readTime}
                                            cardMedia={post.media}
                                            cardMediaAlt={`post_${idx + 1}`}
                                            cardMediaWidth={151}
                                            createdDate={getFormattedDate(post.createdDate)}
                                            hasIcon={true}
                                            displayIcon={<BookmarkAddOutlined fontSize="medium" />}
                                        />
                                    </Box>
                                )
                            })}
                        </Box>
                    </Grid>
                    <Grid item lg={4} md={5} sm={12} xs={12}>
                        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", mb: 1.5 }}>
                            <Typography variant="h6" fontSize={16}>
                                Discover more of what matters to you
                            </Typography>
                        </Box>
                        <Card variant="outlined" sx={{ padding: "1rem", borderRadius: "10px" }}>
                            <Chip label={"test"} sx={{ mr: 1 }} />
                            <Chip label={"sample"} sx={{ mr: 1 }} />
                            <Chip label={"change"} sx={{ mr: 1 }} />
                            <Chip label={"life"} sx={{ mr: 1 }} />
                            <Chip label={"poetry"} sx={{ mr: 1 }} />
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            {/* <Box sx={{ position: "relative" }}>
                <Notifications sx={{ color: "green", position: "absolute" }} fontSize="large" />
                <Done sx={{ position: "absolute", zIndex: 999, top: 8, left: 8, fontSize: 18 }} />
            </Box> */}
            <Box>
                <CButton onClick={() => addTodo()} buttonLabel={"Add Todo"} />
            </Box>
            {console.log("todos = ", todos)}
            <CCopyright websiteName={"Blog Creator"} />
        </GlobalHeaderLayout >
    )
}

export default DashboardPage;