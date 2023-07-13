import { Decorator } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme) => {
    const decorator: Decorator = (Story) => (
        <div className={`app ${theme}`} ><Story /></div>
    )


    return decorator
}