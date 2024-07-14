"use client"

const Lectures = ({ params }) => {
    console.log("student detail is ", params);
    return (
        <>
            <section>
                <h2><span style={{ color: "red" }}>Segment Routing</span> inner page</h2>

                <p>Lecture {params.lectures}</p><br />
                <p>Lectures: {params.lectures[0]}</p>
                <p>Day: {params.lectures[1]}</p>
            </section>
        </>
    )
};

export default Lectures;