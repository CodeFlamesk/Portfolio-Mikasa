import Container from "@components/Container";
const PrivacyPolicyPage = () => {
    return (
        <Container style='flex-col' >
            <div className="flex flex-col w-full ">
                <p className="heading1 text-light-col mt-12 md:mt-24 ">Privacy Policy</p>
                <p className="mt-[42px] text-light-col font-semibold text-[21px] leading-[25px]  ">Your Details and data</p>
                <p className="heading4-regular text-icon-gray mt-6">Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac sodales lectus placerat quis. Curabitur ultricies ex ante, eu placerat ipsum hendrerit ut. Maecenas ornare tellus id consequat mollis. Aenean urna risus, dignissim non cursus nec, volutpat hendrerit libero.</p>
                <p className="mt-[42px] text-light-col font-semibold text-[21px] leading-[25px] ">Security</p>
                <p className="heading4-regular text-icon-gray mt-6">Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et.</p>
                <p className="mt-[42px] text-light-col font-semibold text-[21px] leading-[25px] ">Cookies</p>
         <ul className="flex flex-col gap-3 list-disc ml-5 mt-[26px] ">
            <li className="heading4-regular text-icon-gray ">Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at lorem ultricies. placerat et ac neque. Proin risus eros.</li>
            <li className="heading4-regular text-icon-gray ">Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at lorem ultricies. placerat et ac neque. Proin risus eros.</li>
         </ul>
            </div>
        </Container>
    );
};
export default PrivacyPolicyPage;