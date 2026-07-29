import React from "react";

import { Timer } from "../components/Timer"
import { Todos } from  '../components/Todos';
import { Toggle } from "../components/Toggle";
import { HoverTest } from "../components/HoverTest"
import { Carousel } from "../components/Carousel"
import { Accordion } from  '../components/Accordion';
import { DebounceExample } from "../components/DebounceExample"

function MainPage() {
    return (
        <div>
            <div className="example">
                {/* <Timer />
                <Todos />
                <Toggle />
                <HoverTest />
                <Accordion />
                <DebounceExample /> */}
                <Carousel />
            </div>
        </div>
    );
}

export default MainPage;