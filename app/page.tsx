import React from 'react';
import {useRouter} from "next/router";

const Page = () => {
    const router = useRouter();
    return router.replace("home");
};

export default Page;