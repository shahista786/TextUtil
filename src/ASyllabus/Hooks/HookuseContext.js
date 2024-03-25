import HookuseContext2 from "./ASyllabus/Hooks/HookuseContext2";
import { data1, data2 } from "./HookuseContext1";


export default function HookuseContext() {
    const name = "Shahista";
    const age = 25;
    return (
        <>
            <data1.Provider value={name}>   provider
                <data2.Provider value={age}>
                    <HookuseContext2 />
                </data2.Provider>
            </data1.Provider>
        </>
    );
}
