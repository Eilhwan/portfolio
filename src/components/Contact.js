import React from 'react'
import Aos from 'aos';

export default function Contact() {
    Aos.init();
    const info = [
        ["Email","eilhwan@gmail.com"],
        ["GitHub", "https://github.com/Eilhwan"],
        ["PhoneCall", "+821083153109"]
    ]

    return (
        <div className="text-white p-10" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold underline">CONTACT</h2>
            <div className="p-10">
                {info.map(value=>
                    <div className="p-5">
                        <h4 className="font-bold text-xl">{value[0]}: {value[1]}</h4>
                    </div>
                )}
            </div>
        </div>
    )
}
