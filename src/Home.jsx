import { useEffect, useState } from "react";
import Form from "./Form";
import toast from "react-hot-toast";

const Home = () => {
    const [formCount, setFormCount] = useState(0);

    // Load form count from local storage on initial render
    useEffect(() => {
        const storedCount = JSON.parse(localStorage.getItem("form_count"));
        if (storedCount) {
            setFormCount(storedCount);
        }
    }, []);

    // Save form count to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem("form_count", JSON.stringify(formCount));
    }, [formCount]);


    // handle add new form
    const handleCreateNewForm = () => {
        setFormCount(formCount + 1);
        toast.success("Created New Form!");
    }

    // handle delete all form
    const handleDeleteAllForm = () => {
        localStorage.clear();
        setFormCount(0);
        toast.success("Deleted All Form!");
    }
    return (
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-24 pb-4 grid gap-8">
            <section>
                <h1 className="text-3xl text-center text-purple-500 font-bold">
                    Create Form Just One Click.
                </h1>

                {/* show form manually on ui */}
                <div className="grid md:grid-cols-3 gap-4 py-8">
                    <Form />

                    {/* creat and delete form button */}
                    <div className="md:col-span-2 w-full flex flex-col sm:flex-row items-center justify-center gap-8 bg-white rounded-md p-4 shadow">

                        {/* create new form button */}
                        <button
                            onClick={handleCreateNewForm}
                            className="px-4 py-2 rounded-md bg-purple-500 text-white flex items-center justify-center gap-2 ring-1 ring-purple-500 ring-offset-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            <span>Create New Form</span>
                        </button>

                        {/* delete all form button */}
                        {
                            formCount > 0 ?
                                <button
                                    onClick={handleDeleteAllForm}
                                    className="px-4 py-2 rounded-md bg-rose-500 text-white flex items-center justify-center gap-2 ring-1 ring-rose-500 ring-offset-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>

                                    <span>Delete All Form</span>
                                </button>
                                : ""
                        }
                    </div>
                </div>
            </section>

            {/* dynamicly show form on ui */}
            <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {
                    Array.from({ length: formCount }).map((_, index) => (
                        <Form key={index} />
                    ))
                }
            </section>
        </div>
    );
};

export default Home;