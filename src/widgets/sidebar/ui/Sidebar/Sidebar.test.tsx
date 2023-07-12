import React from "react"
import { render, screen } from "@testing-library/react"
import {Sidebar} from "./Sidebar"
import { renderWithTranslations } from "shared/lib/tests/renderWithTranslations/renderWithTranslations"

describe("Sidebar", ()=>{
    test("with only first param", ()=>{
        renderWithTranslations(<Sidebar  />)
        expect(screen.getByTestId("Sidebar")).toBeInTheDocument();
    })
    test("with only first param", ()=>{
        renderWithTranslations(<Sidebar  />)
        expect(screen.getByTestId("Sidebar")).toBeInTheDocument();
    })
})