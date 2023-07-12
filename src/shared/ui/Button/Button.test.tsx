import React from "react"
import { render, screen } from "@testing-library/react"
import { Button } from "./Button"

describe("button", ()=>{
    test("with only first param", ()=>{
        render(<Button>Test</Button>)
        expect(screen.getByText("Test")).toBeInTheDocument();
        screen.debug()
    })
})