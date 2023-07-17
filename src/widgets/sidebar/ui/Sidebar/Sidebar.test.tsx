import React from "react"
import { render, screen } from "@testing-library/react"
import {Sidebar} from "./Sidebar"
import { renderWithTranslations } from "shared/lib/tests/renderWithTranslations/renderWithTranslations"
import { componentRender } from "shared/lib/tests/componentRender/componentRender"

describe("Sidebar", ()=>{
    test("with only first param", ()=>{
        componentRender(<Sidebar  />)
        expect(screen.getByTestId("Sidebar")).toBeInTheDocument();
    })
    test("with only first param", ()=>{
        componentRender(<Sidebar  />)
        expect(screen.getByTestId("Sidebar")).toBeInTheDocument();
    })
})