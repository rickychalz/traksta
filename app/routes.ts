import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
    index("routes/home/home.tsx"),
    route("charts", "routes/charts/charts.tsx"),
    route("artists", "routes/artists/artists.tsx"),
    route("new-release", "routes/new-releases/new-release.tsx"),
    route("upcoming", "routes/upcoming/upcoming.tsx")
] satisfies RouteConfig;
