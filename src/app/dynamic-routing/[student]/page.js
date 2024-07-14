"use client"


const InnerPage = ({ params }) => {
    console.log("student detail is ", params);
    return (
        <>
            <section>
                <h2>Dynamic Routing <span style={{ color: "red" }}>inner</span> page</h2>

                <h4>Welcome to student inner page <span style={{ color: "green" }}>{params.student.toUpperCase()}</span></h4>
            </section>
        </>
    )
};

export default InnerPage;