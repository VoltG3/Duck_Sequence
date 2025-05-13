import { FakeButtonDates } from "../btn/button.dates.fake"

export const FakeNavigationDates = () => {

    return (
        <div style={{
            position: "relative",
            display: "inline-flex",
            marginBottom: "calc(var(--space) / 2)"
        }}>
            <FakeButtonDates />
        </div>
    )
}