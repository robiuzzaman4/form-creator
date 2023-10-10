import { useState } from "react";
import toast from "react-hot-toast";

const Form = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        toast.success(
            `Your Submission Data:
            {
                email: ${email},
                message: ${message},
            }`
        )

        e.target.reset();
    }
    return (
        <form onSubmit={handleSubmit} className="w-full grid gap-2 bg-white rounded-md p-4 shadow">
            <label className="grid gap-1">
                <span>Email:</span>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    placeholder="example@email.com"
                    className="w-full bg-white outline-none border border-gray-200 focus:border-purple-500 focus:ring-0 focus:ring-offset-4 focus:ring-offset-purple-100 px-4 py-2 rounded-md" required />
            </label>
            <label className="grid gap-1">
                <span>Message:</span>
                <input
                    onChange={(e) => setMessage(e.target.value)}
                    name="message"
                    type="text"
                    placeholder="Hello Devs!"
                    className="w-full bg-white outline-none border border-gray-200 focus:border-purple-500 focus:ring-0 focus:ring-offset-4 focus:ring-offset-purple-100 px-4 py-2 rounded-md" required />
            </label>
            <button
                type="submit" className="px-4 py-2 rounded-md bg-purple-500 text-white mt-2">
                Submit
            </button>
        </form>
    );
};

export default Form;