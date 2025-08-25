

//This is a dymic catch all page
//Meaning it will match any path that is not defined in the app router
//It will not match any path that is defined in the app router
export default async function DynamicPage({params}) {
    const { path } = await params

    console.log("PATH", path)

    return (
        <pre>
            DYNAMIC PAGE <br></br>
            {JSON.stringify(path)}
        </pre>
    )
}