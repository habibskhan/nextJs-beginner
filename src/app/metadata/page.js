const MetaData = () => {
    return (
        <>
            <h1>Welcome to MetaData Page</h1>
        </>
    )
}

export default MetaData;

export function generateMetadata () {
    return {
        title: "Metadata page",
        description: "Welcome to MetaData Page",
    }
}