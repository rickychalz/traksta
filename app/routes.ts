import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
    index("routes/home/home.tsx"),
    route("charts", "routes/charts/charts.tsx")
] satisfies RouteConfig;
