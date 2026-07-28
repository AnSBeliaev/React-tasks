import React from "react";

import { Todos } from  '../components/Todos';
import { HoverTest } from "../components/HoverTest"
import { Accordion } from  '../components/Accordion';
import { Timer } from "../components/Timer"
import { DebounceExample } from "../components/DebounceExample"

function MainPage() {
    return (
        <div>
            <div className="example">
                <Accordion />
                <HoverTest />
                <Todos />
                <Timer />
                <DebounceExample />
            </div>
        </div>
    );
}

export default MainPage;