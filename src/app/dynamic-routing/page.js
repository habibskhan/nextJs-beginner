import Link from "next/link";

const nameData = [
    {
        id: 1,
        name: "Habib",
    },
    {
        id: 2,
        name: "Hassaan",
    },
    {
        id: 3,
        name: "Salman",
    },
];

// const nameData = [
//     "Habib",
//     "Hassaan",
//     "Salman",
// ];

const dynamicRouting = () => {
    const slug = "/dynamic-routing";


    const nameList = nameData.map((item, i) => (
        <li key={i}>
            <Link href={`${slug}/${item.name}`}>{item.name}</Link>
        </li>
        // <li key={i}>
        //     <Link href={`${slug}/${item}`}>{item}</Link>
        // </li>
    ));
    return (
        <>
            <section>
                <h2>Dynamic Routing <span style={{ color: "red" }}>listing</span> page</h2>
                <ul>
                    <li>
                        <Link href="/dynamic-routing/1">Habib</Link>
                    </li>
                    <li>
                        <Link href="/dynamic-routing/2">Sajid</Link>
                    </li>
                    <li>
                        <Link href="/dynamic-routing/3">Hassan</Link>
                    </li>
                    <li>
                        <Link href="/dynamic-routing/4">Salman</Link>
                    </li>
                </ul>
                <br />
                <ul>
                    {nameList}
                    {/* <li>
                        <Link href="/dynamic-routing/habib">Habib</Link>
                    </li>
                    <li>
                        <Link href="/dynamic-routing/hassan">Hassan</Link>
                    </li>
                    <li>
                        <Link href="/dynamic-routing/salman">Salman</Link>
                    </li> */}
                </ul>
            </section>
        </>
    )
};

export default dynamicRouting;