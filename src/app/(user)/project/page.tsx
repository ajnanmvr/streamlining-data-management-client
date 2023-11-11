"use client";
import { useState } from "react";

export default function Page() {
    const [file, setFile] = useState(null);
    const submitForm = (e:any) => {
        e.preventDefault();
        
    }
    return <div>
        <form onSubmit={submitForm}>
            <input type="file" required/>
            <input type="submit" value={`Submit`} />
        </form>
    </div>
}