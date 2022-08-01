import { useEffect, useState } from "react";

export default function ClientRendering({ children }) {
    const [hasMounted, setHasMounted] = useState(false)
    useEffect(() => (setHasMounted(true)), [])
    if(!hasMounted) {
        return null;
    }
    return (
        <>
            {children}
        </>
    )
}