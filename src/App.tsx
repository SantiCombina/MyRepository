import {Toaster} from "sonner";

import {Portfolio} from "./views/portfolio";

function App() {
    return (
        <>
            <Toaster richColors duration={7000} />
            <Portfolio />
        </>
    );
}

export default App;
