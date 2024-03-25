import { Intro } from "./sections/Intro";
import { Separator } from "./components/Separator";
import { Bio } from "./sections/Bio";
import { Hobbies } from "./sections/Hobbies";
import { Outro } from "./sections/Outro";

function App() {
    return (
        <div className="container p-5 mx-auto max-w-4xl">
            <Intro />
            <Separator />
            <Bio />
            <Separator />
            <Hobbies />
            <Separator />
            <Outro />
            <Separator />
        </div>
    );
}

export default App;
