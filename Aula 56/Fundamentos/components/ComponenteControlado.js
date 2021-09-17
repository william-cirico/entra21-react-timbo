import React from "react";
import { useState } from "react";
import { TextInput } from "react-native";

export function ComponenteControlado() {
    const [texto, setTexto] = useState("");

    return (
        <>
            <TextInput placeholder="Digite algo aqui" defaultValue={texto} onChange={text => setTexto(text)} />
            <p>{texto}</p>
        </>
    );
}