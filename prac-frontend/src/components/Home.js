import React from "react";
import Thead from "./Thead";
import Tbody from "./Tbody";
import Form from "./Form";

function Home() {

    return (
        <section id="home-section">
            {/* <from >
          <button type="submit" class="btn btn-primary">Create</button>
        </from> */}
            <Form />

            <table className="table table-dark">
                <Thead />
                <Tbody />
            </table>
        </section>
    );
}

export default Home;
