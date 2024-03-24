import { Timeline } from "./components/Timeline/Timeline";

function App() {
    return (
        <div className="container p-5 mx-auto">
            <Timeline>
                <Timeline.Segment>
                    <Timeline.Icon />
                    <Timeline.Entry style="start">
                        <Timeline.Year>1984</Timeline.Year>
                        <Timeline.Title>
                            First Macintosh computer
                        </Timeline.Title>
                        <Timeline.Content>
                            The Apple Macintosh—later rebranded as the Macintosh
                            128K—is the original Apple Macintosh personal
                            computer. It played a pivotal role in establishing
                            desktop publishing as a general office function. The
                            motherboard, a 9 in (23 cm) CRT monitor, and a
                            floppy drive were housed in a beige case with
                            integrated carrying handle; it came with a keyboard
                            and single-button mouse.
                        </Timeline.Content>
                    </Timeline.Entry>
                </Timeline.Segment>
                <Timeline.Segment>
                    <Timeline.Icon />
                    <Timeline.Entry style="end">
                        <Timeline.Year>1984</Timeline.Year>
                        <Timeline.Title>
                            First Macintosh computer
                        </Timeline.Title>
                        <Timeline.Content>
                            The Apple Macintosh—later rebranded as the Macintosh
                            128K—is the original Apple Macintosh personal
                            computer. It played a pivotal role in establishing
                            desktop publishing as a general office function. The
                            motherboard, a 9 in (23 cm) CRT monitor, and a
                            floppy drive were housed in a beige case with
                            integrated carrying handle; it came with a keyboard
                            and single-button mouse.
                        </Timeline.Content>
                    </Timeline.Entry>
                </Timeline.Segment>
                <Timeline.Segment isLast>
                    <Timeline.Icon />
                    <Timeline.Entry style="start">
                        <Timeline.Year>1984</Timeline.Year>
                        <Timeline.Title>
                            First Macintosh computer
                        </Timeline.Title>
                        <Timeline.Content>
                            The Apple Macintosh—later rebranded as the Macintosh
                            128K—is the original Apple Macintosh personal
                            computer. It played a pivotal role in establishing
                            desktop publishing as a general office function. The
                            motherboard, a 9 in (23 cm) CRT monitor, and a
                            floppy drive were housed in a beige case with
                            integrated carrying handle; it came with a keyboard
                            and single-button mouse.
                        </Timeline.Content>
                    </Timeline.Entry>
                </Timeline.Segment>
            </Timeline>
        </div>
    );
}

export default App;
