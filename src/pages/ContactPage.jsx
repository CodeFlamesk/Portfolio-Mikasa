import Container from "@components/Container";
import ArrowRightIcon from "@components/icon/ArrowRightIcon";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ContactPage = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "CastPressId", // ID вашої служби
                "template_tpawg9a", // ID вашого шаблону
                form.current,
                "mLHa7w2cq6Oc86gyC" // Публічний ключ
            )
            .then(
                () => {
                    alert("Message sent successfully!");
                },
                (error) => {
                    alert("Failed to send the message, please try again.");
                    console.error("Error:", error.text);
                }
            );
    };

    return (
        <Container style="flex-col w-full">
            <p className="heading1 text-light-col pt-12 md:pt-24">Contact</p>
            <p className="heading3 text-light-col pt-[13px]">
                Love to hear your thoughts, fears & feelings...
            </p>
            <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col mt-[46px] w-full max-w-[670px] items-start justify-start"
            >
                <label className="text-icon-gray heading4-regular">Name*</label>
                <input
                    type="text"
                    name="user_name"
                    className="input-style input-shadow"
                    placeholder="Enter your name"
                    required
                />
                <label className="mt-[28px] text-icon-gray heading4-regular mb-1">
                    Email*
                </label>
                <input
                    type="email"
                    name="user_email"
                    className="inputs border h-[42px] px-[14px] text-sm font-normal text-icon-gray input-shadow focus:outline-none rounded border-gray w-full bg-gray"
                    placeholder="Enter your email"
                    required
                />
                <label className="text-icon-gray heading4-regular mb-1 mt-[28px]">
                    Comment
                </label>
                <textarea
                    name="message"
                    className="max-h-[300px] input-style mt-1 min-h-[150px] py-[14px] w-full"
                    placeholder="Enter your message"
                    required
                />
                <button
                    type="submit"
                    className="flex gap-2 rounded transition-all duration-300 ease-in-out px-4 py-2 items-center bg-purple text-white hover:bg-gray hover:text-purple heading5-regular justify-center cursor-pointer max-w-max mt-10"
                >
                    <p>Submit</p>
                    <ArrowRightIcon />
                </button>
            </form>
        </Container>
    );
};

export default ContactPage;
